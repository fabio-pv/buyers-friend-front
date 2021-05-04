class MoneyFormatterUtil {

    static brl(value) {
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
        });

        return formatter.format(value);
    }

}

export default MoneyFormatterUtil;