const initialValue = {
    genreData: [],
    isPending: false,
    isRejected: false,
    isFulfilled: false
};

const genreReducers = (state = initialValue, action) => {
    switch (action.type) {
        case "GET_GENRE_PENDING":
            return {
                ...state,
                isPending: true,
                isRejected: false,
                isFulfilled: false,
            }
        case "GET_GENRE_REJECTED":
            return {
                ...state,
                isPending: false,
                isRejected: true,
                errMsg: action.payload.data
            }
        case "GET_GENRE_FULFILLED":
            return {
                ...state,
                isPending: false,
                isFulfilled: true,
                genreData: action.payload.data
            }
        default:
            return state
    }
}

export default genreReducers