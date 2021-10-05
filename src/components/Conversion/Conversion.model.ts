import Big from 'big.js'

export const calculateCurrencyConversion = (czkValue: number, rate: Big, baseAmount: number) => {
	return Big(czkValue).div(rate).times(baseAmount)
}
