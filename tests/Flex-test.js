import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import { Item } from 'src/'

describe('Item', () => {
  let node
beforeEach(() => {
    node = document.createElement('div')
  })
afterEach(() => {
    unmountComponentAtNode(node)
  })
it('should render the Item', () => {
    render(<Item>Item</Item>, node, () => {
      expect(node.innerHTML).toContain('Item')
    })
  })
})