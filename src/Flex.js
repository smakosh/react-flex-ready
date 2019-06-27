import styled from 'styled-components'
import PropTypes from 'prop-types'

const Flex = styled.div`
	display: flex;
	align-items: ${({ align }) => align || "center"};
	justify-content: space-between;
	flex-wrap: wrap;

	&:after {
		content: "";
		max-width: ${({ col }) => (col && col > 1 ? `${100 / col - 2}%` : "100%")};
		width: 100%;

		@media (max-width: 960px) {
			max-width: 100%;
		}
	}
`;

Flex.propTypes = {
  align: PropTypes.string,
  col: PropTypes.string
}

export default Flex