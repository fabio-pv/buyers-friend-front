import MaskedInput from "react-text-mask/dist/reactTextMask";
import React from "react";

class FormMask {

    static cpf(props) {
        const {...other} = props;
        return <MaskedInput
            {...other}
            mask={[
                /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/
            ]}
            placeholderChar={'\u2000'}
            showMask={true}
        />
    }


    static cnpj(props) {
        const {...other} = props;
        return <MaskedInput
            {...other}
            mask={[
                /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/
            ]}
            placeholderChar={'\u2000'}
            showMask={true}
        />
    }

    static dateCard(props) {
        const {...other} = props;
        return <MaskedInput
            {...other}
            mask={[
                /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/
            ]}
            placeholderChar={'\u2000'}
            showMask={true}
        />
    }

    static cardCvv(props) {
        const {...other} = props;
        return <MaskedInput
            {...other}
            mask={[
                /\d/, /\d/, /\d/, ''
            ]}
            placeholderChar={'\u2000'}
            showMask={true}
        />
    }

    static cardNumber(props) {
        const {...other} = props;
        return <MaskedInput
            {...other}
            mask={[
                /\d/, /\d/,/\d/, /\d/, ' ', /\d/, /\d/, /\d/,/\d/, ' ', /\d/, /\d/, /\d/,/\d/, ' ', /\d/, /\d/, /\d/, /\d/
            ]}
            placeholderChar={'\u2000'}
            showMask={true}
        />
    }

}

export default FormMask;