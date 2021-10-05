import React from 'react'
import Big from 'big.js'
import { Spin } from '@src/components/elements'
import { useExchangeRatesContextValue } from '@src/contexts/ExchangeRates.context'
import { InputGroup, SelectStyled, InputStyled, CalculatedResult, ButtonStyled } from './Conversion.style'
import { calculateCurrencyConversion } from './Conversion.model'
interface DesiredCurrency {
	value: string
	rate: Big
	label: string
	baseAmount: number
}

export function Conversion() {
	const { exchangeRates, isLoading, error } = useExchangeRatesContextValue()
	const [czkInputValue, setCzkInputValue] = React.useState<string | undefined>(undefined)
	const [desiredCurrency, setDesiredCurrency] = React.useState<DesiredCurrency | null>(null)
	const [calculatedResult, setCalculatedResult] = React.useState({ value: Big(0), currency: '' })
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

	React.useEffect(() => {
		if (desiredCurrencyOptions) {
			setDesiredCurrency(desiredCurrencyOptions[0])
		}
	}, [desiredCurrencyOptions])

	const recalculate = React.useCallback(() => {
		if (!czkInputValue || !desiredCurrency) {
			return 0
		}

		setCalculatedResult({
			value: calculateCurrencyConversion(
				Number(czkInputValue),
				desiredCurrency!.rate,
				desiredCurrency!.baseAmount
			),
			currency: desiredCurrency!.label,
		})
	}, [czkInputValue, desiredCurrency])

	if (isLoading) {
		return (
			<div>
				<Spin />
			</div>
		)
	}

	if (error) {
		return <div>Unable to load</div>
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
				{calculatedResult.value.round(2).toString()} {calculatedResult.currency}
			</CalculatedResult>
		</div>
	)
}
