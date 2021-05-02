import {createMuiTheme} from '@material-ui/core/styles';



class ThemeCustomized {

    static system() {

        console.log(
            '#' + process.env.REACT_APP_PRIMARY_COLOR
        );

        return createMuiTheme({
            palette: {
                type: 'light',
                primary: {
                    main: '#' + process.env.REACT_APP_PRIMARY_COLOR
                },
                secondary: {
                    main: '#' + process.env.REACT_APP_SECONDARY_COLOR,
                },
            },
        });
    }
}

export default ThemeCustomized