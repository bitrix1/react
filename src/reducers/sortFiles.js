var initialState = { sort: -1, column: "" };
export default function sortFiles(state = initialState, action) {
    if (action.type === 'SORT_DATA_FILES') {
        console.log("SORT_DATA_FILES",1,action.payload)
        return { ...state, sort: state.sort * -1, column: action.payload };// action.payload
    }
    return state;
}