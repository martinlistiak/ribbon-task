import styled from 'styled-components'
import { Button, Input, Select } from '@src/components/elements'

export const SelectStyled = styled(Select)`
	width: 150px;
	margin-left: 24px;
`

export const InputStyled = styled(Input)`
	margin-right: 24px;
`

export const ButtonStyled = styled(Button)`
	margin: 12px 0;
`

export const ConversionBlock = styled.div``

export const InputGroup = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const CalculatedResult = styled.div`
	padding: 12px;
	font-size: 24px;
`
