const CHNAGE_NAME = 'CHNAGE_NAME';
const CHNAGE_PASSWORD = 'CHNAGE_PASSWORD';
const CREATE_ITEM = 'CREATE_ITEM';
const UPDATE_ITEMS = 'UPDATE_ITEMS';

export const chnageNameInput = (state) => {
    return {
        type: CHNAGE_NAME,
        payload: state
    }
}

export const chnagePasswordInput = (state) => {
    return {
        type: CHNAGE_PASSWORD,
        payload: state
    }
}

export const createNewItam = (state) => {
    return {
        type: CREATE_ITEM,
        payload: state
    }
}

export const updateItem = (state) => {
    return {
        type: UPDATE_ITEMS,
        payload: state
    }
}