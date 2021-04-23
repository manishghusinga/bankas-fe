export const initialState = {
    musicList: []
};

const musicList = (state, action) => {
    switch (action.type) {
        case 'musicList':
            return Object.assign({}, state, action.payload);
        default:
            throw new Error();
    }
}

function resetStore() {
    return initialState;
}

const reducers = { resetStore, musicList };
export const combineReducers = function (state, action) {
    return reducers[action.reducer](state, action);
}
