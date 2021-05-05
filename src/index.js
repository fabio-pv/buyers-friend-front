import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from '@material-ui/core/styles';
import ThemeCustomized from "./Customized/ThemeCustomized";
import {CssBaseline} from "@material-ui/core";
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import SaleScreen from "./Screens/Sale/SaleScreen";
import SaleHistoryScreen from "./Screens/SaleHistory/SaleHistoryScreen";
import "moment/locale/pt-br";
import Start from "./Start";

require('dotenv').config();

ReactDOM.render(
    <Start/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
