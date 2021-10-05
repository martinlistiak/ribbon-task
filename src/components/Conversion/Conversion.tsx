import React from 'react'
import Big from 'big.js'
import { Spin } from '@src/components/elements'
import { useExchangeRatesContextValue } from '@src/contexts/ExchangeRates.context'
import { InputGroup, SelectStyled, InputStyled, CalculatedResult, ButtonStyled } from './Conversion.style'

interface DesiredCurrency {
	value: string
	rate: Big
	label: string
	baseAmount: number
}

export function Conversion() {
	const { exchangeRates, isLoading } = useExchangeRatesContextValue()
	const [czkInputValue, setCzkInputValue] = React.useState<string | undefined>(undefined)
	const [desiredCurrency, setDesiredCurrency] = React.useState<DesiredCurrency | null>(null)
	const desiredCurrencyOptions = React.useMemo(
		() =>
			exchangeRates?.map(({ code, rate, baseAmount }) => ({
				value: code,
				baseAmount,
				rate: Big(rate),
				label: code,
			})),
		[exchangeRates]
	)
	const [calculatedResult, setCalculatedResult] = React.useState(Big(0))

	const recalculate = React.useCallback(() => {
		if (!czkInputValue) {
			return 0
		}

		setCalculatedResult(Big(czkInputValue).div(desiredCurrency!.rate).times(desiredCurrency!.baseAmount))
	}, [czkInputValue, desiredCurrency])

	if (isLoading) {
		return (
			<div>
				<Spin />
			</div>
		)
	}

	return (
		<div>
			<h2>Exchange</h2>
			<InputGroup>
				<InputStyled
					suffix="CZK"
					type="number"
					value={czkInputValue}
					onChange={e => setCzkInputValue(e.target.value)}
				/>
				<span> to </span>
				<SelectStyled
					defaultValue={desiredCurrencyOptions![0].value}
					onChange={(_, option) => setDesiredCurrency(option as DesiredCurrency)}
					options={desiredCurrencyOptions}
				/>
			</InputGroup>

			<ButtonStyled type="primary" onClick={recalculate}>
				Calculate
			</ButtonStyled>
			<CalculatedResult>
				{calculatedResult.round(2).toString()} {desiredCurrency?.label}
			</CalculatedResult>
		</div>
	)
}
