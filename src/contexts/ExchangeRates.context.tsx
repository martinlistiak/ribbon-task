import React from 'react'
import { useQuery } from 'react-query'
import { ExchangeRatesResponse, Queries } from '@src/types'
import * as Api from '@src/api'

type ExchangeRates = ExchangeRatesResponse & { isLoading: boolean; error: null | unknown }

const ExchangeRatesContext = React.createContext<ExchangeRates>({
	date: new Date(),
	exchangeRates: [],
	isLoading: true,
	error: null,
})

export const useExchangeRatesContextProvider = () => {
	const { data, isLoading, error } = useQuery(Queries.exchangeRates, Api.ExchangeRates.fetchExchangeRates)

	return {
		ExchangeRatesContextProvider: ExchangeRatesContext.Provider,
		value: {
			error,
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
