import React from 'react'
import { useExchangeRatesContextValue } from '@src/contexts/ExchangeRates.context'
import { Table, Spin } from '@src/components/elements'
import { ExchangeRatesTableBlock } from './ExchangeRatesTable.style'

const columns = ['country', 'currency', 'code', 'baseAmount', 'rate'].map(name => ({
	title: name,
	dataIndex: name,
}))

export function ExchangeRatesTable() {
	const { date, exchangeRates, isLoading, error } = useExchangeRatesContextValue()

	if (isLoading) {
		return (
			<ExchangeRatesTableBlock>
				<Spin />
			</ExchangeRatesTableBlock>
		)
	}

	return (
		<ExchangeRatesTableBlock>
			<Table
				pagination={{ pageSize: 7 }}
				dataSource={exchangeRates}
				columns={columns}
				rowKey={record => `exchange-rate-${record.code}`}
			/>
			<span>Fetched data on {date?.toDateString()}</span>
		</ExchangeRatesTableBlock>
	)
}
