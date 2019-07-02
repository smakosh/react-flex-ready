import React from 'react'
import {render} from 'react-dom'
import { Flex, Item } from '../../src'
import myList from './example.json'

const Demo = () => (
  <div
		style={{
			maxWidth: 960,
			margin: "0 auto"
		}}
	>
		<h1>Example</h1>
		<Flex col={4}>
			{myList.map(({ columns }, i) => (
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
							textAlign: "center",
							width: "100%",
							border: "1px solid #eee",
							background: "#eee"
						}}
					>
						<h1>{columns}</h1>
					</div>
				</Item>
			))}
		</Flex>
	</div>
)


render(<Demo/>, document.querySelector('#demo'))
