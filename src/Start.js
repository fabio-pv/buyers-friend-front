import React, {Component} from 'react';
import {ThemeProvider} from "@material-ui/core/styles";
import ThemeCustomized from "./Customized/ThemeCustomized";
import {CssBaseline} from "@material-ui/core";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SaleScreen from "./Screens/Sale/SaleScreen";
import SaleHistoryScreen from "./Screens/SaleHistory/SaleHistoryScreen";
import {SuperContext} from "./Contexts/SuperContext";
import LoadComponent from "./Components/LoadComponent/LoadComponent";

class Start extends Component {
    constructor(props) {
        super(props);

        this.state = {

            theme: 'light',
            inLoad: false,

        };
    }

    render() {
        return (
            <SuperContext.Provider value={{
                superState: this,
            }}>
                <ThemeProvider theme={ThemeCustomized.system(this.state.theme)}>
                    <LoadComponent inLoad={this.state.inLoad}/>
                    <CssBaseline/>
                    <Router>
                        <Switch>
                            <Route exact={true}
                                   path={SaleScreen.ROUTE}
                                   component={SaleScreen}/>
                            <Route exact={true}
                                   path={SaleHistoryScreen.ROUTE}
                                   component={SaleHistoryScreen}/>
                        </Switch>
                    </Router>
                </ThemeProvider>
            </SuperContext.Provider>
        );
    }
}

export default Start;