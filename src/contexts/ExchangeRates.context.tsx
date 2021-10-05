import React from 'react'
import { useQuery } from 'react-query'
import { ExchangeRatesResponse, Queries } from '@src/types'
import * as Api from '@src/api'

type ExchangeRates = ExchangeRatesResponse & { isLoading: boolean }

const ExchangeRatesContext = React.createContext<ExchangeRates>({
	date: new Date(),
	exchangeRates: [],
	isLoading: true,
})

export const useExchangeRatesContextProvider = () => {
	const { data, isLoading } = useQuery(Queries.exchangeRates, Api.ExchangeRates.fetchExchangeRates)

	return {
		ExchangeRatesContextProvider: ExchangeRatesContext.Provider,
		value: {
			isLoading,
			date: data?.date,
			exchangeRates: data?.exchangeRates,
		},
	}
}

export const useExchangeRatesContextValue = () => {
	const context = React.useContext(ExchangeRatesContext)

	return context
}
