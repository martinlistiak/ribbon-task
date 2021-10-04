const exchangeRatesApiUrl = 'http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt'

export async function fetchExchangeRates() {
	const response = await fetch(exchangeRatesApiUrl)

	return response.json()
}
