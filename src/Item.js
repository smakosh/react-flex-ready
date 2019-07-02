import styled from 'styled-components'
import PropTypes from 'prop-types'

const Item = styled.div`
	width: 100%;
	max-width: ${({ col, gap = 1 }) => (col && col < 12 ? `${100 * col / 12 - gap}%` : "100%")};

	${({ marginBottom }) =>
		marginBottom &&
		`
		margin-bottom: ${marginBottom}px;
	`}

	@media (max-width: 960px) {
		max-width: ${({ colTablet, gabTablet = 1 }) =>
			colTablet && colTablet < 12 ? `${100 * colTablet / 12 - gabTablet}%` : "100%"};
		margin-bottom: ${({ marginBottom = 10 }) => `${marginBottom}px`};

		&:last-child {
			margin-bottom: unset;
		}
	}

	@media (max-width: 680px) {
		max-width: ${({ colMobile, gapMobile = 1 }) =>
			colMobile && colMobile < 12 ? `${100 * colMobile / 12 - gapMobile}%` : "100%"};
	}

	${({ stretch }) =>
		stretch &&
		`
    display: flex;
    align-self: stretch;
  `}
`;

Item.propTypes = {
  col: PropTypes.number,
  colTablet: PropTypes.number,
  colMobile: PropTypes.number,
  marginBottom: PropTypes.number,
  stretch: PropTypes.bool
}

export default Item