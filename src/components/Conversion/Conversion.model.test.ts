import Big from 'big.js'
import { calculateCurrencyConversion } from './Conversion.model'

describe('Conversion model test', () => {
	test('Conversion rates calculation', () => {
		const result = calculateCurrencyConversion(20, Big(1), 1)

		expect(result.toNumber()).toBe(20)
	})

	test('Conversion rates calculation', () => {
		const result = calculateCurrencyConversion(21, Big(3), 1)

		expect(result.toNumber()).toBe(7)
	})

	test('Conversion rates calculation', () => {
		const result = calculateCurrencyConversion(300, Big(50), 100)

		expect(result.toNumber()).toBe(600)
	})
})
