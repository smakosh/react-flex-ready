import React from 'react'
import {render} from 'react-dom'
import { Flex, Item } from '../../src'

const myList = [{ title: "first" }, { title: "second" }, { title: "third" }];

const Demo = () => (
  <div>
    <h1>Example</h1>
    <Flex>
      {myList.map(({ title }, i) => (
        <Item key={i} col="3" colTablet="3" colMobile="1" stretch>
          <div style={{ textAlign: "center", width: "100%", border: '1px solid #eee' }}>
            <h1>{title}</h1>
          </div>
        </Item>
      ))}
    </Flex>
  </div>
)


render(<Demo/>, document.querySelector('#demo'))
