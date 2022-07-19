const initState = {
    value:"2222",
}
const reducer = (state, action) =>{
    switch (action.type){
        case "sendAction":
            return Object.assign({}, state, action);
        default:
            return state;
    }
}

module.exports = {
    reducer
};
