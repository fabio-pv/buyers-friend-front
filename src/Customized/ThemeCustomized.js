import {createMuiTheme} from '@material-ui/core/styles';


class ThemeCustomized {

    static system(theme) {

        return createMuiTheme({
            palette: {
                type: theme,
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