import React from "react";

export const SaleContext = React.createContext({
    erros: null,
    addProduct: null,
    dataSave: null,
    finishSale: null,
    dataFromPayment: null,
});