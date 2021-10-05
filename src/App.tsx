import React from 'react'
import { useExchangeRatesContextProvider } from '@src/contexts/ExchangeRates.context'
import { ExchangeRatesTable } from '@src/components/ExchangeRatesTable'
import { Conversion } from '@src/components/Conversion'
import { StyledApp, Holder, Content } from './App.style'

import 'antd/dist/antd.css'

export function App() {
	const { ExchangeRatesContextProvider, value } = useExchangeRatesContextProvider()
	return (
		<ExchangeRatesContextProvider value={value}>
			<StyledApp>
				<Holder>
					<Content>
						<Conversion />
					</Content>
					<Content>
						<ExchangeRatesTable />
					</Content>
				</Holder>
			</StyledApp>
		</ExchangeRatesContextProvider>
	)
}
