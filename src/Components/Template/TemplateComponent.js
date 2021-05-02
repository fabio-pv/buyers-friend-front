import React, {Component} from 'react';
import DialogComponent from "../DialogComponent/DialogComponent";
import LoadComponent from "../LoadComponent/LoadComponent";

class TemplateComponent extends Component {
    render() {
        return (
            <div>
                <LoadComponent inLoad={this.props.inLoad ?? false}/>
                <Helmet>
                    <title>{this.props.title ?? '??'}</title>
                </Helmet>
                <ContentHeader>
                    <AppBar>
                        <Toolbar>
                            <Box display={'flex'}
                                 flexDirection={'row'}
                                 width={'100%'}>
                                <Box display={'flex'}
                                     alignItems="center"
                                     justifyContent="flex-start"
                                     flexGrow={1}>
                                    <LogoHeader src={newLogo}/>
                                </Box>
                                {this.props.menu === true &&
                                <Box display={'flex'}
                                     alignItems="center"
                                     justifyContent="flex-end">
                                    <MenuHeader/>
                                </Box>
                                }
                            </Box>
                        </Toolbar>
                    </AppBar>
                </ContentHeader>
                {this.props.messagens !== null &&
                <DialogComponent messagens={this.props.messagens ?? null}/>
                }
            </div>
        );
    }
}

export default TemplateComponent;