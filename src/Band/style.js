import styled from 'styled-components'

export const Wrapper = styled.section`
	position: fixed;
	bottom: 0;
	max-width: 790px;
	margin: 0 auto;
	width: 100%;
	padding: 8px;
	@media screen and (min-width: 767px) {
		padding: 4px;
	}
`

export const Footer = styled.div`
	color: #e5e5e5;
	text-align: center;
	font-size: 12px;
	@media screen and (min-width: 767px) {
		font-size: 16px;
	}
`
