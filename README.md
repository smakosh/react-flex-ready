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

```jsx
import React from "react";
import { render } from "react-dom";
import { Flex, Item } from "react-flex-ready";

const myList = [{ title: "first" }, { title: "second" }, { title: "third" }];

const Demo = () => (
    <div>
        <h1>Example</h1>
        <Flex>
            {myList.map(({ title }, i) => (
                <Item key={i} col="3" colTablet="3" colMobile="1" stretch>
                  <div
                    style={{
                      textAlign: "center",
                      width: "100%",
                      border: "1px solid #eee"
                    }}
                  >
                        <h1>{title}</h1>
                    </div>
                </Item>
            ))}
        </Flex>
    </div>
);

render(<Demo />, document.querySelector("#root"));
```

## Props

### Flex

These docs are inspired by reactjs-popup docs

| Option               | Default           | Type           | Description                                                                                                                                                                                                                                                           |
| -------------------- | ----------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| align              | center                  | {string}    | The way you want to align your items (`align-items`)
| col                 | 1                  | {string}         | How many columns you have within your grid
| as                 | div                  | {string, Component}         | https://www.styled-components.com/docs/api#as-polymorphic-prop
| className                 |                   | {string}         | you can add a className and style the component the way you wish
| style                 |                   | {object}         | you can pass in CSS in JS directly

### Item

| Option               | Default           | Type           | Description                                                                                                                                                                                                                                                           |
| -------------------- | ----------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| col              | 1                  | {string}    | How many columns of 12 your item will take on desktop                                                                                                                                                                                                            |
| col                 | 1                  | {string}         | How many columns you have within your grid
| colTablet              | 1                  | {string}    | How many columns of 12 your item will take on tablet
| colMobile                 | 1                  | {string}         | How many columns of 12 your item will take on mobile
| marginBottom              | `3rem`                  | {string}    | Margin bottom of your item, last item always has 0 on mobile
| stretch                 | false                  | {bool}         | Whether you want the items to have the same height or not
| as                 | div                  | {string, Component}         | https://www.styled-components.com/docs/api#as-polymorphic-prop
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

- [ ] convert CSS in JS to vanilla CSS and remove styled-components
- [ ] Migrate to TypeScript

## Support

If you love this React component and want to support me, you can do so through my Patreon

[![Support me on Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/smakosh)
