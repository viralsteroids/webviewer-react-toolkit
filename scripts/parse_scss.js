const fs = require('fs');
const scss = require('postcss-scss');

/* --- Helpers. --- */

/**
 * Get the Sass AST from a given file.
 * @param {string} path Path to a Sass file.
 */
function getAST(path) {
  const contents = fs.readFileSync(path);
  return scss.parse(contents.toString());
}

/**
 * Camel case to Pascal with spaces.
 * @param {string} group Group string.
 */
function getTitle(group) {
  let words = group.split(/(?=[A-Z])/);
  words = words.map(w => w.charAt(0).toUpperCase() + w.slice(1));
  return words.join(' ');
}

/**
 * Returns a function which can be used to map any prop/value nodes from a Sass
 * AST.
 */
function propMap() {
  const themeAst = getAST('src/styles/_theme.scss');
  const themeNodes = themeAst.nodes;

  const darkCssVariables = themeNodes
    .find(n => n.selector === "html[data-theme='dark']")
    .nodes.filter(n => n.prop && n.value)
    .map(({ prop, value }) => ({ prop, value }));

  return declaration => {
    const { p, v } = { p: declaration.prop, v: declaration.value };
    const scss = `$${p.slice(2)}`;
    const css = `var(${p})`;
    const value = v;
    const dark =
      (darkCssVariables.find(c => c.prop === p) || {}).value || value;
    return { scss, css, value, dark };
  };
}

/**
 * Creates a JS or TS file which default exports the AST.
 * @param {string} path Path to the file.
 * @param {Object} ast The AST object to convert to JS or TS.
 */
function printFile(path, ast) {
  fs.writeFileSync(path, `export default ${JSON.stringify(ast, null, 2)}`);
}

function getSassVariablesGroup(value) {
  return value.map(v => `${v.scss}: ${v.css};`).join('\n');
}

function mapSassVariableObject(ast, sub = false) {
  const entries = Object.entries(ast);

  return entries
    .map(([key, value]) => {
      if (Array.isArray(value) && !value.length) return null;
      const title = getTitle(key);
      const comment = sub ? `// ${title}.\n` : `/* --- ${title}. --- */\n\n`;
      let body = '';
      if (Array.isArray(value)) {
        body = getSassVariablesGroup(value);
      } else {
        body = mapSassVariableObject(value, true);
      }
      return comment + body;
    })
    .filter(Boolean)
    .join('\n\n');
}

async function createSassVariablesFile(ast) {
  const fileContent =
    '// File is auto-generated from _theme. DO NOT EDIT.\n\n' +
    mapSassVariableObject(ast) +
    '\n';
  fs.writeFileSync(`src/styles/_variables.scss`, fileContent);
}

/* --- Mixins. --- */

async function generateMixinsFile(input, output, transform, replace = v => v) {
  const mixinsAst = getAST(input);
  const docsFile = fs.readFileSync(transform);

  const mixinLines = docsFile.toString().split('\n');
  const indexOfEntry = mixinLines.findIndex(l => l.includes('GENERATE_ENTRY'));
  const pre = mixinLines.slice(0, indexOfEntry + 1).join('\n');

  const mixinNodes = mixinsAst.nodes;

  const mixins = mixinNodes.filter(n => n.name === 'mixin');
  const css = mixins[0].source.input.css.split('\n');

  const data = mixins.map(m => {
    const nodes = m.nodes;
    const animationNodes = nodes.filter(n => n.prop === 'animation');
    const isMedia = nodes.some(n => n.name === 'media');
    const animation = animationNodes
      .map(n => {
        const animationName = n.value.split(' ')[0];
        const animationNode = mixinNodes.find(n => n.params === animationName);
        if (!animationNode) return undefined;
        return css
          .slice(
            animationNode.source.start.line - 1,
            animationNode.source.end.line,
          )
          .join('\n');
      })
      .filter(Boolean)
      .join('\n\n');

    const media = isMedia ? ` {\n  // Content\n}` : '';

    const comment = (() => {
      const index = mixinNodes.indexOf(m);
      const commentNode = mixinNodes[index - 1];
      if (
        !commentNode ||
        commentNode.type !== 'comment' ||
        css[commentNode.source.end.line].trim() === ''
      ) {
        return undefined;
      }
      return commentNode.text.trim() || undefined;
    })();

    return {
      include: `@include ${m.params}${media};`,
      comment,
      title: m.params.match(/([^(\s]+).*/)[1],
      code: replace(
        css
          .slice(m.source.start.line - 1, m.source.end.line - 1)
          .filter(line => !line.includes('@mixin'))
          .map(line =>
            line.replace('  ', '').replace('@content;', '/* Content */'),
          )
          .join('\n')
          .trim(),
      ),
      animation: animation && `\n\n${animation}`,
    };
  });

  printFile(
    output,
    data.map(d => d.include),
  );

  fs.writeFileSync(
    transform,
    `${pre}

<ToastProvider>

${data
  .map(
    (d, i) => `
### \`${d.title}\`${d.comment ? '\n\n' + d.comment : ''}

<Mixins index={${i}} />

\`\`\`scss
${d.code}${d.animation}
\`\`\``,
  )
  .join('\n')}

</ToastProvider>
`,
  );
}

/**
 * Parse the mixins file and generate mixins mdx.
 */
async function mixins() {
  const url = 'src/styles/_mixins.scss';
  const docsUrl = 'src/__stories__/2_style/3_mixins.stories.mdx';
  const mixinsUrl = 'src/__stories__/2_style/generated/mixins.ts';

  generateMixinsFile(url, mixinsUrl, docsUrl);
}

/**
 * Parse breakpoints.
 */
async function breakpoints() {
  const url = 'src/styles/_breakpoints.scss';
  const breakpointsUrl = 'src/__stories__/2_style/generated/breakpoints.ts';
  const docsUrl = 'src/__stories__/2_style/4_breakpoints.stories.mdx';

  const breakpointsAST = getAST(url);

  const breakpointsNodes = breakpointsAST.nodes;

  const declarations = (() => {
    const decl = [];

    breakpointsNodes.forEach(n => {
      if (n.type !== 'decl') return;
      decl.push(n);
    });

    return decl;
  })().map(({ prop, value }) => ({ prop, value }));

  const mixins = breakpointsNodes.filter(n => n.name === 'mixin');
  const css = mixins[0].source.input.css.split('\n');

  const data = mixins.map(m => {
    const code = css
      .slice(m.source.start.line - 2, m.source.end.line)
      .join('\n')
      .trim();
    const isOnly = m.params.includes('only');
    const declaration = declarations.find(decl => code.includes(decl.prop));
    const numValue = Number(declaration.value.replace('px', ''));
    return {
      params: m.params,
      min: isOnly ? undefined : numValue,
      max: isOnly ? numValue - 1 : undefined,
      ...declaration,
    };
  });

  printFile('src/__stories__/2_style/generated/breakpointRange.ts', data);

  generateMixinsFile(url, breakpointsUrl, docsUrl, val => {
    let newVal = val;
    data.forEach(data => {
      const isMax = newVal.includes('max-width');
      if (isMax && data.max) {
        newVal = newVal.replace(data.prop, `${data.max}px`);
      } else if (!isMax && data.min) {
        newVal = newVal.replace(data.prop, `${data.min}px`);
      }
      newVal = newVal.replace(' - 1', '');
    });
    return newVal;
  });
}

/**
 * Parse variables and themes files, generate variables and colors mdx.
 */
function main() {
  mixins();
  breakpoints();

  const ast = getAST('src/styles/_theme.scss');
  const nodes = ast.nodes.find(n => n.selector === ':root').nodes;

  const mapper = propMap();

  /* --- Generate variables and colors. --- */

  const declarations = (() => {
    const obj = {};

    const entries = Object.entries({
      color: '--color',
      fontSize: '--font-size',
      fontWeight: '--font-weight',
      padding: '--padding',
      borderRadius: '--border-radius',
      boxShadow: '--box-shadow',
      focus: '--focus',
      fontFamily: '--font-family',
      zIndex: '--z-index',
    });

    entries.forEach(([key]) => (obj[key] = []));
    obj.other = [];

    nodes.forEach(n => {
      if (n.type !== 'decl') return;
      const found = entries.find(([, startsWith]) =>
        n.prop.startsWith(startsWith),
      );
      if (!found) return obj.other.push(n);
      obj[found[0]].push(n);
    });

    Object.entries(obj).forEach(
      ([key, sorted]) => (obj[key] = sorted.map(mapper)),
    );

    const { color, ...rest } = obj;

    return [color, rest];
  })();

  /* --- Sort colors by type. --- */

  const colors = (() => {
    const theme = [];
    const font = [];
    const gray = [];
    const blueGray = [];
    const contrast = [];
    const message = [];
    const other = [];

    declarations[0].forEach(c => {
      if (c.scss.startsWith('$color-theme')) return theme.push(c);
      if (c.scss.startsWith('$color-font')) return font.push(c);
      if (c.scss.startsWith('$color-gray')) return gray.push(c);
      if (c.scss.startsWith('$color-blue-gray')) return blueGray.push(c);
      if (c.scss.startsWith('$color-contrast')) return contrast.push(c);
      if (c.scss.startsWith('$color-message')) return message.push(c);
      other.push(c);
    });

    return { theme, font, gray, blueGray, contrast, message, other };
  })();

  const variableObject = { colors, ...declarations[1] };

  createSassVariablesFile(variableObject);
  printFile(
    'src/__stories__/2_style/generated/styleVariables.ts',
    variableObject,
  );
}

main();
