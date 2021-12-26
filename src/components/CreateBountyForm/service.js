import axios from 'axios';
import { parseCookies } from 'nookies';

class BountyServiceClass {

    apiClient = axios.create({
        baseURL: process.env.NEXT_PUBLIC_EXTERNAL_API_URL || '',
        responseType: 'json',
        headers: {
          'Content-Type': 'application/json',
        },
    });

    async createNewBounty(newBountyDto) {
        const headers = {
            'Authorization': 'Bearer ' + parseCookies().token
        }
        return await this.apiClient.post('bounty', newBountyDto, {
            headers: headers
        });
    }
}

export const BountyService = new BountyServiceClass()
