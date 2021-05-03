class MessageUtil {

    static make({
                    title,
                    body,
                    requirements = null,
                    okBtnToRoute = null,
                    okButtonText = 'ok',
                    cancelButtonText = null,
                    okButtonFunction = null,
                }) {
        return {
            open: true,
            title: title,
            body: body,
            requirements: requirements,
            okBtnToRoute: okBtnToRoute,
            okButtonText: okButtonText,
            cancelButtonText: cancelButtonText,
            okButtonFunction: okButtonFunction,
        };
    }

}

export default MessageUtil;
