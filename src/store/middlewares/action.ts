import { push } from "react-router-redux";
import { ACTION_PENDING, ACTION_SUCCESS, ACTION_FAILURE } from "../../common/constants";

const urlParamReg = new RegExp("^:([a-z]+$)", "i");

function reduceUrlWithParams(query, params = {}) {
    const parts = query.split("/");
    return parts.map(part => {
        if (urlParamReg.test(part)) {
            const key = urlParamReg.exec(part)[1];
            switch (key) {
                default: {
                    return (params[key] || Date.now())
                }
            }
        }

        return part;
    }).join("/");
}

export default ({ dispatch }) => next => async action => {
    if(action.payload instanceof Promise) {
        dispatch({
            type: `${action.type}_${ACTION_PENDING}`
        });
        dispatch({
            type: ACTION_PENDING
        });

        await action.payload
            .then(res => {
                const result = res;

                dispatch({
                    type: `${action.type}_${ACTION_SUCCESS}`,
                    payload: result
                });
                dispatch({
                    type: ACTION_SUCCESS
                });

                if (action.redirect) {
                    const url = reduceUrlWithParams(action.redirect, result);
                    dispatch(push(url))
                }
            })
            .catch(error => {
                dispatch({
                    type: `${action.type}_${ACTION_FAILURE}`,
                    payload: error
                })
            });
    }

    next(action);
}