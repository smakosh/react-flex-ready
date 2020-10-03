import React from 'react';
import * as ReactDOM from 'react-dom';
import { Item } from '../src';

describe('Item', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Item />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
