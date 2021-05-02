import ApiClient from "./ApiClient";

class PaymentMethodService {
    constructor() {
        this.uri = 'paymentMethod';
        this.apiClient = new ApiClient();
    }

    async get() {
        try {

            return await this.apiClient.doRequest({
                uri: this.uri,
                method: ApiClient.GET,
                expectedStatus: 200,
            });

        } catch (e) {
            throw e;
        }
    }

}

export default PaymentMethodService;