import axios from 'axios';
import { GithubAuthProvider } from 'firebase/auth';

class GithubServiceClass {

    apiClient = axios.create({
        baseURL: process.env.NEXT_PUBLIC_EXTERNAL_API_URL || '',
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    async uploadGithubAccessToken(signInResult) {
        const credential = GithubAuthProvider.credentialFromResult(signInResult);
        let githubUserDto = {
            firebase_user_id: signInResult.user.uid,
            access_token: credential.accessToken
        }
        const token = await signInResult.user.getIdToken();
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        return await this.apiClient.post('github/token', githubUserDto, {
            headers: headers
        })
    }

}

export const GithubService = new GithubServiceClass()
