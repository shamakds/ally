export default store => next => action => {
    console.info(action);
    next(action);
};