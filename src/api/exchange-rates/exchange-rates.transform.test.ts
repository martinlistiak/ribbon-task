import { mockedExchangeRatesText } from './exchange-rates.mock'
import { transformExchangeRates } from './exchange-rates.transform'

describe('Exchange rates transformations', () => {
	test('Parse correct format of exchange rates mock', () => {
		const { date, exchangeRates } = transformExchangeRates(mockedExchangeRatesText)

		expect(date).toEqual(new Date('10/4/2021'))
		expect(exchangeRates).toHaveLength(8)
		expect(exchangeRates![0]).toHaveProperty('code')
	})
})
