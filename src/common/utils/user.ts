export default ({ getState, dispatch }) => next => action => {
    next(action);
}
