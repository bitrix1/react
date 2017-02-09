export const sortFiles = (column) => dispatch => {
    dispatch({ type: 'SORT_DATA_FILES', payload: column})
}
// var sort = -1;
// export const sortFiles = () => dispatch => {
//     dispatch({ type: 'SORT_DATA_FILES', payload: sort * -1})
// }