import styled from 'styled-components'

export const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100vw;
	min-height: 100vh;
	background: ${({ theme }) => theme.colors.background};
`
