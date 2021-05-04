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
                    .typeError(ValidationUtil.MSG_CARD_DATE_EXPIRED)
                    .max(7, ValidationUtil.MSG_CARD_DATE_EXPIRED)
                    .matches(
                        /([0-9]{2})\/([0-9]{4})/,
                        ValidationUtil.MSG_CARD_DATE_EXPIRED
                    )
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