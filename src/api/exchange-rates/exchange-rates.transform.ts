import { ExchangeRatesResponse } from '@src/types'

interface FullYear {
	day: string
	month: string
	year: string
}

const dateRegex = /^(?<day>[0-9]{1,2}).(?<month>[0-9]{1,2}).(?<year>[0-9]{4})/

export function transformDateLine(dateLine: string): Date {
	const { groups } = dateRegex.exec(dateLine) as any as { groups: FullYear }
	const [day, month, year] = Object.values(groups).map(x => parseInt(x, 10))

	// - 1 coz JS sux
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth#parameters
	return new Date(year, month - 1, day)
}

export function transformExchangeRates(exchangeratesText: string): ExchangeRatesResponse {
	const [dateLine, _, ...ratesLines] = exchangeratesText.split('\n')
	const date = transformDateLine(dateLine)

	const exchangeRates = ratesLines.map(rateLine => {
		const [country, currency, baseAmount, code, rate] = rateLine.split('|')

		return {
			country,
			currency,
			baseAmount: Number(baseAmount),
			code,
			rate: Number(rate),
		}
	})

	return { date, exchangeRates }
}
