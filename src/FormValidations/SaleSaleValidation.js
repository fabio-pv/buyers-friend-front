import * as yup from 'yup';
import ValidationUtil from "../Utils/ValidationUtil";

class SaleSaleValidation {

    static async validate(form) {
        try {

            let validate = yup.object().shape({
                payment_method: yup
                    .string()
                    .required(ValidationUtil.MSG_FIELD_REQUIRED),
                subsidiary: yup
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

export default SaleSaleValidation;