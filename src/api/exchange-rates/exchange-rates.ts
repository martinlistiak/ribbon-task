import { ExchangeRatesResponse } from '@src/types'
import { transformExchangeRates } from './exchange-rates.transform'

const exchangeRatesApiUrl = 'http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt'

export async function fetchExchangeRates(): Promise<ExchangeRatesResponse> {
	const response = await fetch(exchangeRatesApiUrl)

	return transformExchangeRates(await response.json())
}
