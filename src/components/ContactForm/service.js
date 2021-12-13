import axios from 'axios';

class ContactServiceClass {

    apiClient = axios.create({
        baseURL: process.env.NEXT_PUBLIC_EXTERNAL_API_URL || '',
        responseType: 'json',
        headers: {
          'Content-Type': 'application/json',
        },
    });

    async sendContactMessage(contactMessageDto) {
        const resp = await this.apiClient.post('contact', contactMessageDto )
        if (resp?.status !== 200) {
            console.log("Error with contact message: ", resp.statusText)
            return ""
        }
        return resp?.data;
    }
}

export const ContactService = new ContactServiceClass()
