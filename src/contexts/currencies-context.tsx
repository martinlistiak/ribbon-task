import React from 'react'
import Big from 'big.js'
import { useQuery } from 'react-query'

interface ExchangeRates {
	country: string
	fullName: string
	code: string
	baseAmount: number
	exchangeRate: number | Big
}

interface ExchangeRatesContextType {
	date: Date
	exchangeRates: ExchangeRates[]
}

const ExchangeRatesContext = React.createContext<ExchangeRatesContextType>({
	date: new Date(),
	exchangeRates: [],
})

export const useExchangeRatesContextProvider = () => {
	const { date, exchangeRates } = useQuery()

	return {
		ExchangeRatesContextProvider: ExchangeRatesContext.Provider,
		value: {
			date,
			exchangeRates,
		},
	}
}

export const useExchangeRatesContextValue = () => {
	const context = React.useContext(ExchangeRatesContext)

	return context
}
