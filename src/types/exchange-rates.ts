import Big from 'big.js'

export interface ExchangeRate {
	country: string
	currency: string
	code: string
	baseAmount: number
	rate: number | Big
}

export interface ExchangeRatesResponse {
	date: Date | undefined
	exchangeRates: ExchangeRate[] | undefined
}
