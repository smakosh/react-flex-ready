import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import { Flex } from 'src/'

describe('Flex', () => {
  let node
beforeEach(() => {
    node = document.createElement('div')
  })
afterEach(() => {
    unmountComponentAtNode(node)
  })
it('should render the Flex', () => {
    render(<Flex>Cool</Flex>, node, () => {
      expect(node.innerHTML).toContain('Cool')
    })
  })
})