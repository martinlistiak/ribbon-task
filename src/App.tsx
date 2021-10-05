import React from 'react'
import { useExchangeRatesContextProvider } from '@src/contexts/ExchangeRates.context'
import { ExchangeRatesTable } from '@src/components/ExchangeRatesTable'
import { StyledApp } from './App.style'

import 'antd/dist/antd.css'

export function App() {
	const { ExchangeRatesContextProvider, value } = useExchangeRatesContextProvider()
	return (
		<ExchangeRatesContextProvider value={value}>
			<StyledApp>
				<ExchangeRatesTable />
			</StyledApp>
		</ExchangeRatesContextProvider>
	)
}
