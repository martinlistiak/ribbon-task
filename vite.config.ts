import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const exchangeRatesApiUrl = 'http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, 'src'),
		},
	},
	plugins: [react()],
	server: {
		proxy: {
			'/api/exchange-rates': {
				target: exchangeRatesApiUrl,
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api\/exchange-rates/, ''),
			},
		},
	},
})
