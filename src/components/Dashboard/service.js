import axios from 'axios';
import { parseCookies } from 'nookies';
import { toast } from 'react-toastify';

class UserDataServiceClass {
	apiClient = axios.create({
		baseURL: process.env.NEXT_PUBLIC_EXTERNAL_API_URL || '',
		responseType: 'json',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	async sendUserData(userData, mutate, setIsEdited) {
		const headers = {
			Authorization: 'Bearer ' + parseCookies().token,
		};

		const resp = await this.apiClient.put('user', userData, {
			headers: headers,
		});

		if (resp?.status !== 204) {
			console.log('Error while updating user data: ', resp);
			return '';
		}

		await mutate();
		setIsEdited(prev => !prev);
		toast.success('Your Account has been updated!');
	}
}

export const UserDataService = new UserDataServiceClass();
