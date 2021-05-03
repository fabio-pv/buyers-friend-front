import * as yup from 'yup';
import ValidationUtil from "../Utils/ValidationUtil";

class PaymentSaleValidation {

    static async validate(form) {
        try {

            let validate = yup.object().shape({
                card_holder: yup
                    .string()
                    .required(ValidationUtil.MSG_FIELD_REQUIRED),
                card_number: yup
                    .string()
                    .required(ValidationUtil.MSG_FIELD_REQUIRED),
                cvv: yup
                    .string()
                    .required(ValidationUtil.MSG_FIELD_REQUIRED),
                expiration_date: yup
                    .string()
                    .required(ValidationUtil.MSG_FIELD_REQUIRED),
            });

            validate.validateSync(form, {abortEarly: false})

            return true;

        } catch (e) {
            let erros = [];
            e.inner.forEach(function (value, index) {
                erros[value.path] = value.message;
            });

            return erros;
        }
    }

}

export default PaymentSaleValidation;