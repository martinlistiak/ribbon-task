import { User } from '@src/types'

const CORRECT_PASSWORD = 'ilovereact'

// Mocked response
export async function logIn(username: string, password: string): Promise<User> {
	if (password !== CORRECT_PASSWORD) {
		throw {
			status: 401,
			data: null,
			message: 'User not authenticated',
		}
	}

	const user = {
		// user password would be omitted in the response from the server
		id: 123456,
		username,
	}

	return new Promise(resolve => {
		setTimeout(() => {
			resolve(user)
		}, 1500)
	})
}
