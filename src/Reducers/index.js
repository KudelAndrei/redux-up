const initialState = {
    name: 'name',
    password: 'password',
    items: []
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHNAGE_NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'CHNAGE_PASSWORD':
            return {
                ...state,
                password: action.payload
            }
        case 'CREATE_ITEM':
            return {
                ...state,
                items: action.payload
            }
        case 'UPDATE_ITEMS':
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}