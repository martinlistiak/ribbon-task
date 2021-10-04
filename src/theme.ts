import 'styled-components'

export const theme = {
	colors: {
		primary: '#8a45ff',
		background: '#ffffff',
	},
}

type Theme = typeof theme

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
