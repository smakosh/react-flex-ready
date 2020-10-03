import React from 'react';
import * as ReactDOM from 'react-dom';
import { Flex } from '../src';

describe('Flex', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Flex />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
