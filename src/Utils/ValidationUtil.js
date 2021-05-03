/* eslint-disable */
class ValidationUtil {

    static MSG_FIELD_REQUIRED = 'Campo obrigatório';
    static MSG_FIELD_NUMBER = 'Campo precisa ser um número';
    static MSG_FIELD_POSITIVE = 'Campo precisa ser um número positivo';
    static MSG_FIELD_EMAIL = 'Campo precisa ser um email valido';
    static MSG_STRONG_PASSWORD = 'Campo precisa conter número e uma letra maiúscula e mais de 8 caracteres.';
    static MSG_DATE_RANGE_END = 'A data não poder ser menor que a inicial';
    static MSG_FIELD_MAX = 'O campo precisa ter menos que ${max} caracteres.';
    static MSG_FIELD_MAX_NUMBER = 'O campo precisa ter um valor menor que ${max}.';
    static MSG_INTERGER = 'O campo precisa ser um número inteiro';
    static MSG_PASSWORD_NOT_EQUAL = 'As senhas não conferem';
    static MSG_CARD_DATE_EXPIRED = 'Data inválida';

}

export default ValidationUtil;