import React, {Component} from 'react';
import {
    Dialog,
    DialogContentText,
    DialogTitle,
    DialogActions,
    Button,
    DialogContent,
    Typography
} from "@material-ui/core";

class DialogComponent extends Component {
    handleOpen = () => {
        this.setState({
            open: true,
        });
    }

    handleClose = () => {
        this.props.messagens.open = false;
        this.setState({
            open: false,
        });

        if (this.props.messagens.okBtnToRoute !== null) {
            window.location.href = this.props.messagens.okBtnToRoute;
        }
    }

    handleOk = () => {
        if (this.props.messagens.okButtonFunction !== null) {
            this.props.messagens.okButtonFunction();
        }

        this.handleClose();
    }

    handleCancel = () => {
        this.handleClose();
    }

    makeMessage(message) {

        const newMessage = message.substring(
            0,
            message.lastIndexOf("<a")
        );

        const link = message.substring(
            message.lastIndexOf("<a"),
            message.length
        );

        return <>
            {newMessage}
            <div dangerouslySetInnerHTML={{__html: link}}></div>
        </>;
    }

    tryMakeRequirements() {
        try {

            const itens = [];

            const object = this.props.messagens.requirements;

            Object.keys(object).forEach(function (key) {

                itens.push(
                    <Typography variant={'body2'}
                                color={'error'}>
                        * {object[key]}
                    </Typography>
                );

            });

            return itens;

        } catch (e) {
            return (<></>);
        }
    }

    render() {

        if (this.props.messagens === null) {
            return <div></div>;
        }

        return (
            <div>
                <Dialog open={this.props.messagens.open ?? false}
                        onClose={() => this.handleClose()}>
                    <DialogTitle id="alert-dialog-title">{this.props.messagens.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.makeMessage(this.props.messagens.body)}
                        </DialogContentText>
                        <DialogContentText id="alert-dialog-description">
                            {this.tryMakeRequirements()}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {this.props.messagens.cancelButtonText !== null &&
                        <Button onClick={() => this.handleCancel()} color="primary" autoFocus>
                            {this.props.messagens.cancelButtonText}
                        </Button>
                        }
                        {this.props.messagens.okButtonText !== null &&
                        <Button onClick={() => this.handleOk()} color="primary" autoFocus>
                            {this.props.messagens.okButtonText}
                        </Button>
                        }
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default DialogComponent;