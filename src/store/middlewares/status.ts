import {APP_PENDING, APP_READY, ACTION_PENDING, ACTION_FAILURE, ACTION_SUCCESS} from "../../common/constants";
const actionTypeReg = new RegExp("^[a-z_]+[a-z]+_([a-z]+$)", "i");

export default ({ getState, dispatch }) => next => action => {
    if (action.type === APP_PENDING || action.type === APP_READY) {
        return next(action);
    }

    const actionType = (actionTypeReg.exec(action.type) || [])[1];
    const { app } = getState();

    switch (actionType) {
        case ACTION_PENDING: {
            dispatch({
               type: APP_PENDING
            });
            break;
        }
        case (ACTION_SUCCESS || ACTION_FAILURE): {
            if (app.isPending) {
                dispatch({
                    type: APP_READY
                });
            }
            break;
        }
    }

    next(action);
}