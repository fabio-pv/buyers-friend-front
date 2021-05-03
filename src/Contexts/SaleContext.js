import React from "react";

export const SaleContext = React.createContext({
    erros: null,
    addProduct: null,
    dataSave: null,
    finishSale: null,
    setDataFromPayment: null,
    setDataFromClient: null,
    setDataFromSale: null,
    stateParent: null,
});