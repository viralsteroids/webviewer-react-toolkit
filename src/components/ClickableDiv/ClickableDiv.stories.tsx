import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';
import { action } from '../../storybook-helpers/action/action';
import { ClickableDiv } from '../ClickableDiv';
import readme from './README.md';

export default { title: 'Components/ClickableDiv', component: ClickableDiv, parameters: { readme } };

export const Basic = () => (
  <ClickableDiv
    disabled={boolean('disabled', false)}
    noFocusStyle={boolean('noFocusStyle', false)}
    usePointer={boolean('usePointer', false)}
    onClick={action('onClick')}
  >
    {text('children', 'This is a clickable div!')}
  </ClickableDiv>
);
