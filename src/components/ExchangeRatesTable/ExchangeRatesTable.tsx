import React from 'react'
import { useExchangeRatesContextValue } from '@src/contexts/ExchangeRates.context'
import { Table, Spin } from '@src/components/elements'

export function ExchangeRatesTable() {
	const { date, isLoading } = useExchangeRatesContextValue()

	if (isLoading) {
		return (
			<div>
				<Spin />
			</div>
		)
	}

	return (
		<div>
			<Table />
			{date}
		</div>
	)
}
