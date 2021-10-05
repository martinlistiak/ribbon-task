import { ExchangeRatesResponse } from '@src/types'
import { transformExchangeRates } from './exchange-rates.transform'

export async function fetchExchangeRates(): Promise<ExchangeRatesResponse> {
	const response = await fetch('/api/exchange-rates')
	const responseBody = await response.text()

	return transformExchangeRates(responseBody)
}
