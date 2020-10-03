# react-flex-ready

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

[build-badge]: https://img.shields.io/travis/smakosh/react-flex-ready/master.png?style=flat-square
[build]: https://travis-ci.org/smakosh/react-flex-ready

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-flex-ready

## Getting started

```bash
npm i react-flex-ready
```

Or

```bash
yarn add react-flex-ready
```

[See Example](https://codesandbox.io/s/react-flex-ready-example-q6fdg)

## Props

### Flex

These docs are inspired by reactjs-popup docs

| Option               | Default           | Type           | Description                                                                                                                                                                                                                                                           |
| -------------------- | ----------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| align              | center                  | {string}    | The way you want to align your items (`align-items`)
| justifyContent              | space-between                  | {string}    |
| col                 |                  | {number}         | depends if you have like 5 elements and each one takes 4 out of 12 of space, will explain this more on a blog post
| colTablet                 |                  | {number}         | Same as col but on Tablet
| colMobile                 |                  | {number}         | Same as col but on Mobile
| gap                 | 1             | {number}            | Gap applies between elements, use it only when you have like 5 elements and each one takes 4 out of 12 of space, to be documented better.
| gabTablet                 | 1             | {number}            | Same as `gap` but for tablet
| gapMobile                 | 1             | {number}            | Same as `gap` but for mobile
| as                 | div                  | {string, Component}         | <https://www.styled-components.com/docs/api#as-polymorphic-prop>
| className                 |                   | {string}         | you can add a className and style the component the way you wish
| style                 |                   | {object}         | you can pass in CSS in JS directly

### Item

| Option               | Default           | Type           | Description                                                                                                                                                                                                                                                           |
| -------------------- | ----------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gap              | 1                  | {number}    | The gap value between your elements, 1 is highly recommended (it's not valid when your element takes 12 out of 12 of space)
| gabTablet                 | 1             | {number}            | Same as `gap` but for tablet
| gapMobile                 | 1             | {number}            | Same as `gap` but for mobile
| col              | 1                  | {number}    | How many columns out of 12 your item will take on desktop
| colTablet              | 1                  | {number}    | How many columns out of 12 your item will take on tablet
| colMobile                 | 1                  | {number}         | How many columns out of 12 your item will take on mobile
| marginBottom              | `10px` on mobile                  | {number}    | Margin bottom of your item, last item always has 0 on mobile
| stretch                 | false                  | {bool}         | Whether you want the items to have the same height or not
| as                 | div                  | {string, Component}         | <https://www.styled-components.com/docs/api#as-polymorphic-prop>
| className                 |                   | {string}         | you can add a className and style the component the way you wish
| style                 |                   | {object}         | you can pass in CSS in JS directly

## Built with

- React & Styled-components

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contributors

- [Myself](https://smakosh.com)
- [Abdullah Hilson](https://github.com/abumalick)

## Todo

- [x] convert CSS in JS to vanilla CSS and remove styled-components

> CSS only alternative: <https://codepen.io/Smakosh/pen/JjXpamp>

- [x] Migrate to TypeScript

## Support

If you love this React component and want to support me, you can do so through my Patreon or GitHub sponsors.

[![Support me on Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/smakosh)
