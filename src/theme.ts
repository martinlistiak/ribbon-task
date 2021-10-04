import 'styled-components'

export const theme = {
	colors: {
		primary: '#fa824c',
		secondary: '#342e37',
		panel: '#fafffd',
		error: 'hsl(11, 92%, 57%)',
	},
}

type Theme = typeof theme

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
