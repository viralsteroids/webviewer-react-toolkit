# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.3.2](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.3.1...v0.3.2) (2020-03-11)

### Features

- **Choice:** choice component for radio buttons or checkboxes ([124bcb1](https://github.com/PDFTron/webviewer-react-toolkit/commit/124bcb10877cb846f48d99d5d921b361dd17c8ed))
- **icons:** added Check and Circle icons ([8f81fba](https://github.com/PDFTron/webviewer-react-toolkit/commit/8f81fba3e0237d3b8e464cecc40f8ff982105cb5))
- **Input:** narrowed possible input types ([5885568](https://github.com/PDFTron/webviewer-react-toolkit/commit/5885568c1741f7a54dfe99b9b5e0daa913dda62f))
- **Label:** optional text for label ([71341c0](https://github.com/PDFTron/webviewer-react-toolkit/commit/71341c016d5b82018a794598dde4015734340842))
- **useID:** new hook to generate IDs if not given ([a5775a6](https://github.com/PDFTron/webviewer-react-toolkit/commit/a5775a6fd84967c8c974643bbeb892cb8b311924))

### Styles

- **colors:** lightened font secondary in light theme ([0a73451](https://github.com/PDFTron/webviewer-react-toolkit/commit/0a7345169cb1a6e820659d6a4728003d473f8117))

### [0.3.1](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.3.0...v0.3.1) (2020-03-09)

### Features

- **Label:** added a generic form field label ([88d3d3f](https://github.com/PDFTron/webviewer-react-toolkit/commit/88d3d3f4e6dd3e1823c542b366a3ffbab5fadfc8))

## [0.3.0](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.2.1...v0.3.0) (2020-03-04)

### ⚠ BREAKING CHANGES

- **Toast:** prop toastType renamed to message, as it will now be used across multiple components

### Features

- **Input:** rightElement prop for adding custom right element ([9f441b1](https://github.com/PDFTron/webviewer-react-toolkit/commit/9f441b1bb368c9ecb91aea9684e8c26240b36202))
- **a11y:** added aria-labels to close buttons of modal and toast ([fab395f](https://github.com/PDFTron/webviewer-react-toolkit/commit/fab395fcdba1e40c22cd46021ce1c4a7c7df46a5))
- **icons:** added Hide, Show and Search icons ([4cf10f5](https://github.com/PDFTron/webviewer-react-toolkit/commit/4cf10f5143e83c422f5fe734dbb6787c7b709c20))
- **Input:** added input component ([394a7be](https://github.com/PDFTron/webviewer-react-toolkit/commit/394a7beb3eaedc42188820a1b2f7a41cfd1e8f2d))
- **Toast:** renamed toastType prop to message ([238630f](https://github.com/PDFTron/webviewer-react-toolkit/commit/238630fbf31e868c964cad3bc36b92a44ad1c424))
- **Icon:** added icon component for using included or custom icons ([741b6e5](https://github.com/PDFTron/webviewer-react-toolkit/commit/741b6e58e811db91ca7e75427b5161d155026bc1))
- **icons:** added ChevronDown and RotateRight icons ([af137c6](https://github.com/PDFTron/webviewer-react-toolkit/commit/af137c65ee3f9131e934a0c102d8bb68302e756d))
- **ToolButton:** added expandProps for expandable menu button ([a65a7e3](https://github.com/PDFTron/webviewer-react-toolkit/commit/a65a7e3ebf57e7528a69ed25e3c78592c79bab23))

### Bug Fixes

- **Button:** fix font color icon buttons ([a04522e](https://github.com/PDFTron/webviewer-react-toolkit/commit/a04522e788cc90f132b5c5366be49e40679af1e0))
- **Icon:** display inline for icon ([2a67871](https://github.com/PDFTron/webviewer-react-toolkit/commit/2a67871917eddd8cead4c386aef5487b2921a29c))
- **useAccessibleFocus:** remove all listeners when no subscribers ([3ab273f](https://github.com/PDFTron/webviewer-react-toolkit/commit/3ab273f8edbb30a3d55626b8572fa8ed477d07e9))
- **Thumbnail:** fixed issue with keys not registering on tool buttons ([e24afb5](https://github.com/PDFTron/webviewer-react-toolkit/commit/e24afb52ecc8f03f6ff9874355a4e617a095944e))

### Styles

- **colors:** added focus shadows for message colors ([fc9eaa2](https://github.com/PDFTron/webviewer-react-toolkit/commit/fc9eaa2e60d15530e44fb204dffbabc7dec31f63))
- **Icon:** flex center items within icon ([df5c160](https://github.com/PDFTron/webviewer-react-toolkit/commit/df5c160044935767b0fcf0da2d0d7840f4cefdb7))

### Refactors

- **useAccessibleFocus:** simplify observable class ([03c648d](https://github.com/PDFTron/webviewer-react-toolkit/commit/03c648d0104c82275abb2c030abad0877ddd4cb4))
- **id:** switched to sequential ID generation ([65eb0b3](https://github.com/PDFTron/webviewer-react-toolkit/commit/65eb0b3aeb3308198cc1c643d925c8f4b18ce676))

## [0.3.0-beta.7](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.3.0-beta.6...v0.3.0-beta.7) (2020-03-04)

### Features

- **Input:** rightElement prop for adding custom right element ([9f441b1](https://github.com/PDFTron/webviewer-react-toolkit/commit/9f441b1bb368c9ecb91aea9684e8c26240b36202))

### Refactors

- **useAccessibleFocus:** simplify observable class ([03c648d](https://github.com/PDFTron/webviewer-react-toolkit/commit/03c648d0104c82275abb2c030abad0877ddd4cb4))

## [0.3.0-beta.6](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.3.0-beta.5...v0.3.0-beta.6) (2020-02-29)

### Bug Fixes

- **Button:** fix font color icon buttons ([a04522e](https://github.com/PDFTron/webviewer-react-toolkit/commit/a04522e788cc90f132b5c5366be49e40679af1e0))
- **Icon:** display inline for icon ([2a67871](https://github.com/PDFTron/webviewer-react-toolkit/commit/2a67871917eddd8cead4c386aef5487b2921a29c))

## [0.3.0-beta.5](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.3.0-beta.4...v0.3.0-beta.5) (2020-02-28)

### ⚠ BREAKING CHANGES

- **Toast:** prop toastType renamed to message, as it will now be used across multiple components

### Features

- **a11y:** added aria-labels to close buttons of modal and toast ([fab395f](https://github.com/PDFTron/webviewer-react-toolkit/commit/fab395fcdba1e40c22cd46021ce1c4a7c7df46a5))
- **icons:** added Hide, Show and Search icons ([4cf10f5](https://github.com/PDFTron/webviewer-react-toolkit/commit/4cf10f5143e83c422f5fe734dbb6787c7b709c20))
- **Input:** added input component ([394a7be](https://github.com/PDFTron/webviewer-react-toolkit/commit/394a7beb3eaedc42188820a1b2f7a41cfd1e8f2d))
- **Toast:** renamed toastType prop to message ([238630f](https://github.com/PDFTron/webviewer-react-toolkit/commit/238630fbf31e868c964cad3bc36b92a44ad1c424))

### Bug Fixes

- **useAccessibleFocus:** remove all listeners when no subscribers ([3ab273f](https://github.com/PDFTron/webviewer-react-toolkit/commit/3ab273f8edbb30a3d55626b8572fa8ed477d07e9))

### Refactors

- **id:** switched to sequential ID generation ([65eb0b3](https://github.com/PDFTron/webviewer-react-toolkit/commit/65eb0b3aeb3308198cc1c643d925c8f4b18ce676))

### Styles

- **colors:** added focus shadows for message colors ([fc9eaa2](https://github.com/PDFTron/webviewer-react-toolkit/commit/fc9eaa2e60d15530e44fb204dffbabc7dec31f63))
- **Icon:** flex center items within icon ([df5c160](https://github.com/PDFTron/webviewer-react-toolkit/commit/df5c160044935767b0fcf0da2d0d7840f4cefdb7))

## [0.3.0-beta.4](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.2.1...v0.3.0-beta.4) (2020-02-28)

### Features

- **Icon:** added icon component for using included or custom icons ([741b6e5](https://github.com/PDFTron/webviewer-react-toolkit/commit/741b6e58e811db91ca7e75427b5161d155026bc1))
- **icons:** added ChevronDown and RotateRight icons ([af137c6](https://github.com/PDFTron/webviewer-react-toolkit/commit/af137c65ee3f9131e934a0c102d8bb68302e756d))
- **ToolButton:** added expandProps for expandable menu button ([a65a7e3](https://github.com/PDFTron/webviewer-react-toolkit/commit/a65a7e3ebf57e7528a69ed25e3c78592c79bab23))

### Bug Fixes

- **Thumbnail:** fixed issue with keys not registering on tool buttons ([e24afb5](https://github.com/PDFTron/webviewer-react-toolkit/commit/e24afb52ecc8f03f6ff9874355a4e617a095944e))

## [0.2.1](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.2.0...v0.2.1) (2020-02-26)

### Features

- **Modal:** improved accessibility on modal ([9613ba7](https://github.com/PDFTron/webviewer-react-toolkit/commit/9613ba76db40067fb31cc6e48850ad8a82257121))
- **Toast:** improved accessibility on toast ([cf0e696](https://github.com/PDFTron/webviewer-react-toolkit/commit/cf0e696f524ae353e6cb5c01345c92a45cf0611a))

### Bug Fixes

- **Button:** no longer shows hover or active style when disabled ([43f8895](https://github.com/PDFTron/webviewer-react-toolkit/commit/43f8895d0c1a83d21774716d53d760b563f62bc6))
- **ToastProvider:** cancel close timeout on unmount ([ab9dcd9](https://github.com/PDFTron/webviewer-react-toolkit/commit/ab9dcd987a59dfeef3814cb0b215adac6152c7d9))
- **ToastProvider:** remove pointer events on toast wrapper ([e802738](https://github.com/PDFTron/webviewer-react-toolkit/commit/e8027380e8051934f2766c3650aeb40b22680940))

### Styles

- **mixins:** added padding-bottom mixin ([704fb11](https://github.com/PDFTron/webviewer-react-toolkit/commit/704fb116b5ade3c1030d103a6d6d8c31041eeb80))
- **Modal:** allow scrolling modal if height is greater than screen ([1f508e1](https://github.com/PDFTron/webviewer-react-toolkit/commit/1f508e1322666cd83ae2c1629764900c25ce4436))
- **font:** added Tahoma as backup font, made font-family a variable ([3d1756b](https://github.com/PDFTron/webviewer-react-toolkit/commit/3d1756b5b3c0b3aa777230849e7a2b949facea1d))
- **Button:** opacity on internals when disabled ([21eeb27](https://github.com/PDFTron/webviewer-react-toolkit/commit/21eeb272ce35c07e3da90e931832b5b9448c4be1))
- **ButtonGroup:** can nest groups for more complex layouts ([d531544](https://github.com/PDFTron/webviewer-react-toolkit/commit/d53154466715dbb75ccf078abba9cb3b214facad))

## [0.3.0-beta.3](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.3.0-beta.2...v0.3.0-beta.3) (2020-02-26)

### Bug Fixes

- **Button:** no longer shows hover or active style when disabled ([43f8895](https://github.com/PDFTron/webviewer-react-toolkit/commit/43f8895d0c1a83d21774716d53d760b563f62bc6))

### Styles

- **mixins:** added padding-bottom mixin ([704fb11](https://github.com/PDFTron/webviewer-react-toolkit/commit/704fb116b5ade3c1030d103a6d6d8c31041eeb80))
- **Modal:** allow scrolling modal if height is greater than screen ([1f508e1](https://github.com/PDFTron/webviewer-react-toolkit/commit/1f508e1322666cd83ae2c1629764900c25ce4436))

## [0.3.0-beta.2](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.3.0-beta.1...v0.3.0-beta.2) (2020-02-25)

### Features

- **Modal:** improved accessibility on modal ([9613ba7](https://github.com/PDFTron/webviewer-react-toolkit/commit/9613ba76db40067fb31cc6e48850ad8a82257121))
- **Toast:** improved accessibility on toast ([cf0e696](https://github.com/PDFTron/webviewer-react-toolkit/commit/cf0e696f524ae353e6cb5c01345c92a45cf0611a))

### Bug Fixes

- **ToastProvider:** cancel close timeout on unmount ([ab9dcd9](https://github.com/PDFTron/webviewer-react-toolkit/commit/ab9dcd987a59dfeef3814cb0b215adac6152c7d9))
- **ToastProvider:** remove pointer events on toast wrapper ([e802738](https://github.com/PDFTron/webviewer-react-toolkit/commit/e8027380e8051934f2766c3650aeb40b22680940))

### Styles

- **font:** added Tahoma as backup font, made font-family a variable ([3d1756b](https://github.com/PDFTron/webviewer-react-toolkit/commit/3d1756b5b3c0b3aa777230849e7a2b949facea1d))

## [0.3.0-beta.1](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.2.0-beta.5...v0.3.0-beta.1) (2020-02-24)

### Styles

- **Button:** opacity on internals when disabled ([21eeb27](https://github.com/PDFTron/webviewer-react-toolkit/commit/21eeb272ce35c07e3da90e931832b5b9448c4be1))
- **ButtonGroup:** can nest groups for more complex layouts ([d531544](https://github.com/PDFTron/webviewer-react-toolkit/commit/d53154466715dbb75ccf078abba9cb3b214facad))

## [0.2.0](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.1.0...v0.2.0) (2020-02-24)

### ⚠ BREAKING CHANGES

- **FileOrganizer:** removed virtualizeThreshold prop since the organizer is always virtualized
- **Thumbnail:** removed hideExtension prop, no longer necessary since Thumbnail will not display extension due to it being included in File.name

### Features

- **ToastProvider:** added noTimeout prop to persist specified types ([d783400](https://github.com/PDFTron/webviewer-react-toolkit/commit/d783400a9acb61539dc0e1327f5974b29745bce9))
- **FileOrganizer:** grid size based on first item, not hard-coded ([30eada0](https://github.com/PDFTron/webviewer-react-toolkit/commit/30eada0f284af9245a3f83045d8ce5845decc4ee))
- **FileOrganizer:** multi-directional movement and focusing ([a835a48](https://github.com/PDFTron/webviewer-react-toolkit/commit/a835a48879c7e37ec532d750e50f5c6d9cb5a405))
- **ButtonGroup:** added prop to center buttons on mobile widths ([a3e10be](https://github.com/PDFTron/webviewer-react-toolkit/commit/a3e10becc8a8167da3da9544083a469a3495e7ca))
- **FileOrganizer:** is now always virtualized and full height ([96aa70e](https://github.com/PDFTron/webviewer-react-toolkit/commit/96aa70ea12c8e2bd82e91ec339d7d6eee10641a8)), closes [#9](https://github.com/PDFTron/webviewer-react-toolkit/issues/9)
- **File:** clone accepts overrides arg to override any properties ([84a1e6c](https://github.com/PDFTron/webviewer-react-toolkit/commit/84a1e6c5c674f3f9f9afa53559aeae86a527bdd1))
- **File:** added updateDocumentObj method for updating documentObj ([57d1760](https://github.com/PDFTron/webviewer-react-toolkit/commit/57d1760486531de4795ffdb05ac31dcc5311242a))
- **File:** added clone function to safely duplicate files ([2597af1](https://github.com/PDFTron/webviewer-react-toolkit/commit/2597af1e9ce59e392286c9807e67d45d29c7e14e))

### Bug Fixes

- **Overlay:** position fixed instead of absolute ([5eb0fe8](https://github.com/PDFTron/webviewer-react-toolkit/commit/5eb0fe8828e6184aaf27f24df69a1dda892d3dc7))
- **Draggable:** prevent flicker when dragging items ([d0740ad](https://github.com/PDFTron/webviewer-react-toolkit/commit/d0740ad55914ddcbb2ab8ce289555e1148943936)), closes [#6](https://github.com/PDFTron/webviewer-react-toolkit/issues/6)
- **Thumbnail:** no longer displays extension, now included in name ([6360abd](https://github.com/PDFTron/webviewer-react-toolkit/commit/6360abd49d9e7a6ccc300f2cbb77ea2aa865fb9b))

### Build and Dependencies

- updated tslib ([09fb887](https://github.com/PDFTron/webviewer-react-toolkit/commit/09fb887f6433ac7ecc9aea3f27c4e3251e703040))

## [0.2.0-beta.5](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.2.0-beta.4...v0.2.0-beta.5) (2020-02-24)

### Features

- **FileOrganizer:** grid size based on first item, not hard-coded ([30eada0](https://github.com/PDFTron/webviewer-react-toolkit/commit/30eada0f284af9245a3f83045d8ce5845decc4ee))
- **FileOrganizer:** multi-directional movement and focusing ([a835a48](https://github.com/PDFTron/webviewer-react-toolkit/commit/a835a48879c7e37ec532d750e50f5c6d9cb5a405))

## [0.2.0-beta.4](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.2.0-beta.3...v0.2.0-beta.4) (2020-02-21)

### ⚠ BREAKING CHANGES

- **FileOrganizer:** removed virtualizeThreshold prop since the organizer is always virtualized

### Features

- **ButtonGroup:** added prop to center buttons on mobile widths ([a3e10be](https://github.com/PDFTron/webviewer-react-toolkit/commit/a3e10becc8a8167da3da9544083a469a3495e7ca))
- **FileOrganizer:** is now always virtualized and full height ([96aa70e](https://github.com/PDFTron/webviewer-react-toolkit/commit/96aa70ea12c8e2bd82e91ec339d7d6eee10641a8)), closes [#9](https://github.com/PDFTron/webviewer-react-toolkit/issues/9)

### Bug Fixes

- **Draggable:** prevent flicker when dragging items ([d0740ad](https://github.com/PDFTron/webviewer-react-toolkit/commit/d0740ad55914ddcbb2ab8ce289555e1148943936)), closes [#6](https://github.com/PDFTron/webviewer-react-toolkit/issues/6)

## [0.2.0-beta.3](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.2.0-beta.2...v0.2.0-beta.3) (2020-02-21)

### Features

- **File:** clone accepts overrides arg to override any properties ([84a1e6c](https://github.com/PDFTron/webviewer-react-toolkit/commit/84a1e6c5c674f3f9f9afa53559aeae86a527bdd1))

## [0.2.0-beta.2](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.2.0-beta.1...v0.2.0-beta.2) (2020-02-20)

### Features

- **File:** added updateDocumentObj method for updating documentObj ([57d1760](https://github.com/PDFTron/webviewer-react-toolkit/commit/57d1760486531de4795ffdb05ac31dcc5311242a))

## [0.2.0-beta.1](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.1.0...v0.2.0-beta.1) (2020-02-20)

### ⚠ BREAKING CHANGES

- **Thumbnail:** removed hideExtension prop, no longer necessary since Thumbnail will not display extension due to it being included in File.name

### Features

- **File:** added clone function to safely duplicate files ([2597af1](https://github.com/PDFTron/webviewer-react-toolkit/commit/2597af1e9ce59e392286c9807e67d45d29c7e14e))

### Bug Fixes

- **Thumbnail:** no longer displays extension, now included in name ([6360abd](https://github.com/PDFTron/webviewer-react-toolkit/commit/6360abd49d9e7a6ccc300f2cbb77ea2aa865fb9b))

## [0.1.0](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.1.0-beta.1...v0.1.0) (2020-02-19)

### ⚠ BREAKING CHANGES

- **Overlay:** removed blockClicks and darkOverlay from Overlay, will be moved into components that require these properties
- **colors:** since color-blue-gray-4 was unused, shifted every color-blue-gray over so there is no longer a color-blue-gray-7, and every color above color-blue-gray-3 has been updated
- **padding:** padding-half renamed to padding-small, padding-small renamed to padding-medium
- **breakpoints:** media queries do not work with CSS variables, so created new Sass file for breakpoints, and removed breakpoints from mixins file
- **css:** renamed tablet-lower-boundary to breakpoint-tablet, and desktop-lower-boundary to breakpoint-desktop
- sass and css are now in `/dist/scss` and `/dist/css` respectively (moved from `/lib/`)
- renamed white color variables to contrast since they are no longer white when dark theme is enabled

### Features

- **ButtonGroup:** added button group for easy button layout ([9457c44](https://github.com/PDFTron/webviewer-react-toolkit/commit/9457c44242e6b8a92426cf3fbccd5ae3daa194a0))
- **IconButton:** added icon button ([6fa450b](https://github.com/PDFTron/webviewer-react-toolkit/commit/6fa450be8d9242d8ce4656495bd930dec6382d7b))
- **icons:** exposed single and multi page icons ([a45e459](https://github.com/PDFTron/webviewer-react-toolkit/commit/a45e459f542f566bceb747349d3df463740eb174))
- **icons:** exposed some icons that are used internally ([0a35b58](https://github.com/PDFTron/webviewer-react-toolkit/commit/0a35b586ed437fb35cce32bae4cd479b647323ed))
- **Modal:** added focus lock to modal to ensure user can't tab out ([7b005a8](https://github.com/PDFTron/webviewer-react-toolkit/commit/7b005a8741fe423e421d5ad32320bca0b574a436))
- **Modal:** added modal component for displaying confirmations and info ([8a69e44](https://github.com/PDFTron/webviewer-react-toolkit/commit/8a69e44640e86701aeb271b39d4ed64188deefde))
- **ToastProvider:** if added toast has timeout of 0 will not timeout ([c8c4f3c](https://github.com/PDFTron/webviewer-react-toolkit/commit/c8c4f3cdee1ecf8af5a5af1ba52866117302e00f))
- **useUnmountDelay:** added hook for delayed unmounts, used in Modal ([1ef4338](https://github.com/PDFTron/webviewer-react-toolkit/commit/1ef433879b1cdac27cfad98ca8bc7602cd31fb94))
- **FocusTrap:** added FocusTrap and useFocusTrap hook ([b691590](https://github.com/PDFTron/webviewer-react-toolkit/commit/b691590c3dc1a885eff81798ff66ce01932c6a41))
- **Toast:** added the Toast visual component ([b7b5eb0](https://github.com/PDFTron/webviewer-react-toolkit/commit/b7b5eb090f1f0323de2736ef0cdb5d401b65f328))
- **ToastProvider:** added toast provider to access toast management ([1452669](https://github.com/PDFTron/webviewer-react-toolkit/commit/1452669447f85c48a8ace9b50ae492c94e248fdd))
- **useToast:** added hook for accessing adding and removal of toasts ([34b7e5d](https://github.com/PDFTron/webviewer-react-toolkit/commit/34b7e5d1b60bccaaf266d929e6b43a87fb9830ec))
- **Overlay:** created component ([946772c](https://github.com/PDFTron/webviewer-react-toolkit/commit/946772c606f8b21c4fbb5dfc539074cee6c23c35))

### Bug Fixes

- **Overlay:** no longer unmounts when first item removed ([52ae549](https://github.com/PDFTron/webviewer-react-toolkit/commit/52ae549d7b774b3eeea71275a98f3c82c6dc1245))
- **Button:** now works with svg icon children ([2c40b9d](https://github.com/PDFTron/webviewer-react-toolkit/commit/2c40b9d5dc0a78ca7b51bf0d3290c8fe887828c0))
- **css:** breakpoints renamed to breakpoint-\<device\> ([e0aeafc](https://github.com/PDFTron/webviewer-react-toolkit/commit/e0aeafc72f5a34e74dea764e63c039f231026908))
- **FileOrganizer:** fix to spacing issue with non-virtualized items ([804aa66](https://github.com/PDFTron/webviewer-react-toolkit/commit/804aa6698efd1cf25af39c36d5e307bc1b184515)), closes [#1](https://github.com/PDFTron/webviewer-react-toolkit/issues/1)

### Styles

- **colors:** removed unused color-blue-gray-4 ([89a4a5a](https://github.com/PDFTron/webviewer-react-toolkit/commit/89a4a5a65308b476c2c63bddec44523b8063df48))
- **IconButton:** added padding to make button square given square icon ([39caaca](https://github.com/PDFTron/webviewer-react-toolkit/commit/39caacad795f8794d848ddc60e7cc45fe1b31a82))
- **breakpoints:** moved breakpoints to own file, removed CSS variables ([39b1c4c](https://github.com/PDFTron/webviewer-react-toolkit/commit/39b1c4ce0d69003e76b8536cf180078917f8fe9c))
- **font:** made webkit font smoothing auto instead of antialiased ([0b2dca7](https://github.com/PDFTron/webviewer-react-toolkit/commit/0b2dca7c2537ab872351e398330c27a9d09c9b7d))
- **padding:** renamed paddings to be more obvious as to size ([bef4c39](https://github.com/PDFTron/webviewer-react-toolkit/commit/bef4c3949b5a200f0460c45accd16dc5a13192b5))
- **Spinner:** references new spinner mixin for animation ([477cdc1](https://github.com/PDFTron/webviewer-react-toolkit/commit/477cdc1cf990cc7d7499ca9f6041d52e4c9478fa))
- **mixins:** use CSS variables in mixins instead of Sass variables ([4fbe555](https://github.com/PDFTron/webviewer-react-toolkit/commit/4fbe555dbb5f62b615dc89773b96516b31804f4d))
- **theme:** implemented dark theme across all components and docs ([5e075cb](https://github.com/PDFTron/webviewer-react-toolkit/commit/5e075cb6aae66dcddc95933f8f9631644e52eefb))

### Refactors

- **Draggable:** prevent unnecessary onDragChange calls ([5ec004a](https://github.com/PDFTron/webviewer-react-toolkit/commit/5ec004ae62b3cc17f28f8b2b423331d4284f9bb5))
- **Overlay:** correct memoization of props to avoid rerenders ([6e2879c](https://github.com/PDFTron/webviewer-react-toolkit/commit/6e2879cf82f4832e332c5d24fb487e28bce612ce))

### Build and Dependencies

- building sass and css into dist directory ([3a32dfc](https://github.com/PDFTron/webviewer-react-toolkit/commit/3a32dfc625ef2a9eb7b34612ae688b79553f3ff9))
- added esm build process and added tslib dependency ([161e2b1](https://github.com/PDFTron/webviewer-react-toolkit/commit/161e2b174a2b4ed57ea9075a70023eb492b31e90))

## [0.1.0-beta.8](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.1.0-beta.7...v0.1.0-beta.8) (2020-02-19)

### ⚠ BREAKING CHANGES

- **Overlay:** removed blockClicks and darkOverlay from Overlay, will be moved into components that require these properties
- **colors:** since color-blue-gray-4 was unused, shifted every color-blue-gray over so there is no longer a color-blue-gray-7, and every color above color-blue-gray-3 has been updated

### Features

- **ButtonGroup:** added button group for easy button layout ([9457c44](https://github.com/PDFTron/webviewer-react-toolkit/commit/9457c44242e6b8a92426cf3fbccd5ae3daa194a0))
- **IconButton:** added icon button ([6fa450b](https://github.com/PDFTron/webviewer-react-toolkit/commit/6fa450be8d9242d8ce4656495bd930dec6382d7b))
- **icons:** exposed single and multi page icons ([a45e459](https://github.com/PDFTron/webviewer-react-toolkit/commit/a45e459f542f566bceb747349d3df463740eb174))
- **icons:** exposed some icons that are used internally ([0a35b58](https://github.com/PDFTron/webviewer-react-toolkit/commit/0a35b586ed437fb35cce32bae4cd479b647323ed))
- **Modal:** added focus lock to modal to ensure user can't tab out ([7b005a8](https://github.com/PDFTron/webviewer-react-toolkit/commit/7b005a8741fe423e421d5ad32320bca0b574a436))
- **Modal:** added modal component for displaying confirmations and info ([8a69e44](https://github.com/PDFTron/webviewer-react-toolkit/commit/8a69e44640e86701aeb271b39d4ed64188deefde))
- **ToastProvider:** if added toast has timeout of 0 will not timeout ([c8c4f3c](https://github.com/PDFTron/webviewer-react-toolkit/commit/c8c4f3cdee1ecf8af5a5af1ba52866117302e00f))
- **useUnmountDelay:** added hook for delayed unmounts, used in Modal ([1ef4338](https://github.com/PDFTron/webviewer-react-toolkit/commit/1ef433879b1cdac27cfad98ca8bc7602cd31fb94))

### Bug Fixes

- **Overlay:** no longer unmounts when first item removed ([52ae549](https://github.com/PDFTron/webviewer-react-toolkit/commit/52ae549d7b774b3eeea71275a98f3c82c6dc1245))

### Styles

- **colors:** removed unused color-blue-gray-4 ([89a4a5a](https://github.com/PDFTron/webviewer-react-toolkit/commit/89a4a5a65308b476c2c63bddec44523b8063df48))
- **IconButton:** added padding to make button square given square icon ([39caaca](https://github.com/PDFTron/webviewer-react-toolkit/commit/39caacad795f8794d848ddc60e7cc45fe1b31a82))

## [0.1.0-beta.7](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.1.0-beta.6...v0.1.0-beta.7) (2020-02-13)

### ⚠ BREAKING CHANGES

- **padding:** padding-half renamed to padding-small, padding-small renamed to padding-medium
- **breakpoints:** media queries do not work with CSS variables, so created new Sass file for breakpoints, and removed breakpoints from mixins file

### Features

- **FocusTrap:** added FocusTrap and useFocusTrap hook ([b691590](https://github.com/PDFTron/webviewer-react-toolkit/commit/b691590c3dc1a885eff81798ff66ce01932c6a41))
- **Toast:** added the Toast visual component ([b7b5eb0](https://github.com/PDFTron/webviewer-react-toolkit/commit/b7b5eb090f1f0323de2736ef0cdb5d401b65f328))
- **ToastProvider:** added toast provider to access toast management ([1452669](https://github.com/PDFTron/webviewer-react-toolkit/commit/1452669447f85c48a8ace9b50ae492c94e248fdd))
- **useToast:** added hook for accessing adding and removal of toasts ([34b7e5d](https://github.com/PDFTron/webviewer-react-toolkit/commit/34b7e5d1b60bccaaf266d929e6b43a87fb9830ec))

### Bug Fixes

- **Button:** now works with svg icon children ([2c40b9d](https://github.com/PDFTron/webviewer-react-toolkit/commit/2c40b9d5dc0a78ca7b51bf0d3290c8fe887828c0))

### Styles

- **breakpoints:** moved breakpoints to own file, removed CSS variables ([39b1c4c](https://github.com/PDFTron/webviewer-react-toolkit/commit/39b1c4ce0d69003e76b8536cf180078917f8fe9c))
- **font:** made webkit font smoothing auto instead of antialiased ([0b2dca7](https://github.com/PDFTron/webviewer-react-toolkit/commit/0b2dca7c2537ab872351e398330c27a9d09c9b7d))
- **padding:** renamed paddings to be more obvious as to size ([bef4c39](https://github.com/PDFTron/webviewer-react-toolkit/commit/bef4c3949b5a200f0460c45accd16dc5a13192b5))
- **Spinner:** references new spinner mixin for animation ([477cdc1](https://github.com/PDFTron/webviewer-react-toolkit/commit/477cdc1cf990cc7d7499ca9f6041d52e4c9478fa))

## [0.1.0-beta.6](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.1.0-beta.5...v0.1.0-beta.6) (2020-02-10)

### Refactors

- **Overlay:** correct memoization of props to avoid rerenders ([6e2879c](https://github.com/PDFTron/webviewer-react-toolkit/commit/6e2879cf82f4832e332c5d24fb487e28bce612ce))

## [0.1.0-beta.5](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.1.0-beta.4...v0.1.0-beta.5) (2020-02-10)

### ⚠ BREAKING CHANGES

- **css:** renamed tablet-lower-boundary to breakpoint-tablet, and desktop-lower-boundary to breakpoint-desktop

### Features

- **Overlay:** created component ([946772c](https://github.com/PDFTron/webviewer-react-toolkit/commit/946772c606f8b21c4fbb5dfc539074cee6c23c35))

### Bug Fixes

- **css:** breakpoints renamed to breakpoint-\<device\> ([e0aeafc](https://github.com/PDFTron/webviewer-react-toolkit/commit/e0aeafc72f5a34e74dea764e63c039f231026908))

### Styles

- **mixins:** use CSS variables in mixins instead of Sass variables ([4fbe555](https://github.com/PDFTron/webviewer-react-toolkit/commit/4fbe555dbb5f62b615dc89773b96516b31804f4d))

## [0.1.0-beta.4](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.1.0-beta.3...v0.1.0-beta.4) (2020-02-06)

### ⚠ BREAKING CHANGES

- sass and css are now in `/dist/scss` and `/dist/css` respectively (moved from `/lib/`)

### Build and Dependencies

- building sass and css into dist directory ([3a32dfc](https://github.com/PDFTron/webviewer-react-toolkit/commit/3a32dfc625ef2a9eb7b34612ae688b79553f3ff9))
- added esm build process and added tslib dependency ([161e2b1](https://github.com/PDFTron/webviewer-react-toolkit/commit/161e2b174a2b4ed57ea9075a70023eb492b31e90))

## [0.1.0-beta.3](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.1.0-beta.2...v0.1.0-beta.3) (2020-02-05)

### ⚠ BREAKING CHANGES

- renamed white color variables to contrast since they are no longer white when dark theme is enabled

### Bug Fixes

- **FileOrganizer:** fix to spacing issue with non-virtualized items ([804aa66](https://github.com/PDFTron/webviewer-react-toolkit/commit/804aa6698efd1cf25af39c36d5e307bc1b184515)), closes [#1](https://github.com/PDFTron/webviewer-react-toolkit/issues/1)

### Styles

- implemented dark theme across all components and docs ([5e075cb](https://github.com/PDFTron/webviewer-react-toolkit/commit/5e075cb6aae66dcddc95933f8f9631644e52eefb))

## [0.1.0-beta.2](https://github.com/PDFTron/webviewer-react-toolkit/compare/v0.1.0-beta.1...v0.1.0-beta.2) (2020-02-03)

### Documentation

- fixed uneven titles across docs ([caf01ce](https://github.com/PDFTron/webviewer-react-toolkit/commit/caf01ce6e8edf17c011ee65544124511a90c7000))

## 0.1.0-beta.1 (2020-02-01)

### Build and Dependencies

- **release:** Initial public release ([ca2f892](https://github.com/PDFTron/webviewer-react-toolkit/commit/ca2f8929b3c015cb0d979c7dd540180dca1a8e51))
