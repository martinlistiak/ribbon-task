import styled from 'styled-components'
import { Card } from '@src/components/elements'

export const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	min-height: 100vh;
	background: ${({ theme }) => theme.colors.background};
`

export const Holder = styled.div`
	width: 800px;
`

export const Content = styled(Card)`
	width: 100%;

	.ant-card-body {
		height: 100%;
	}
`
