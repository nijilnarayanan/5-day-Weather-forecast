import styled from 'styled-components'

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	margin: 0 16px;

	@media screen and (min-width: 767px) {
		flex-direction: row;
		justify-content: space-between;
		margin: 32px;
	}
`
