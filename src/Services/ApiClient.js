import axios from 'axios';

const GET = 'get';
const POST = 'post';
const PATCH = 'patch';
const DELETE = 'delete';

class ApiClient {
    constructor(version = null) {
        this.axiosInstance = null;
        this.baseURL = process.env.REACT_APP_API_BASE_URL;
        this.makeInstance();
    }

    makeInstance() {

        const baseURL = this.baseURL + '/';
        this.axiosInstance = axios.create({
            baseURL: baseURL,
            validateStatus: false,
        });
    }

    async doRequest({
                        uri,
                        method = ApiClient.GET,
                        body = {},
                        expectedStatus = null
                    }) {
        try {

            const response = await this.axiosInstance.request({
                url: uri,
                method: method,
                data: body
            });

            if (expectedStatus !== null) {
                if (response.status !== expectedStatus) {
                    throw new Error(JSON.stringify({
                        error: response.data,
                        status: response.status,
                    }));
                }
            }

            return response;

        } catch (e) {
            throw e;
        }
    }

    static get GET() {
        return GET;
    }

    static get POST() {
        return POST;
    }

    static get PATCH() {
        return PATCH;
    }

    static get DELETE() {
        return DELETE;
    }

}

export default ApiClient;