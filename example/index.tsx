import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Flex, Item } from '../.';
import myList from './example';

const App = () => (
  <div
    style={{
      maxWidth: 960,
      margin: '0 auto',
    }}
  >
    <h1>Example</h1>
    <Flex col={4} total={myList.length}>
      {myList.map(({ columns }, i: number) => (
        <Item
          key={i}
          col={columns}
          colTablet={6}
          colMobile={12}
          gap={1}
          marginBottom={30}
          stretch
        >
          <div
            style={{
              textAlign: 'center',
              width: '100%',
              border: '1px solid #eee',
              background: '#eee',
            }}
          >
            <h1>{columns}</h1>
          </div>
        </Item>
      ))}
    </Flex>
    <h2>Hello</h2>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
