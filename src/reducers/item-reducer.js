import * as actions from'../actions/item-actions'



const INITIAL_STATE = {
    list: {
    },
    selectedItemId: null
};


export default (state = INITIAL_STATE, action) => {

    if (!action || !action.type) {
        return state;
    }

    switch (action.type) {

        case actions.ADD_ITEM:

            let maxItemId = 99
            if(Object.keys(state.list).length > 0) {
                maxItemId = Object.keys(state.list).map(itemId => {
                    return parseInt(itemId, 10)
                }).max()
            }

            const newId = maxItemId + 1

            return {
                ...state,
                list: Object.assign({}, state.list, {
                    [newId]: {
                        itemId: newId,
                        name: action.payload.name,
                        description: action.payload.description,
                        price: action.payload.price,
                        dateCreated: null
                    }
                })
            }

        case actions.GET_ITEMS:
            return state
        //
        //case actions.SET_SELECTED_PERSON_ID:
        //
        //    return Object.assign({}, state, {
        //        selectedPersonId: action.payload.userId
        //    })
        //
        //case actions.UPDATE_PERSON:
        //
        //    existingRecord = state.list[action.payload.userId]
        //
        //    return Object.assign({}, state, {
        //        list: Object.assign({}, state.list, {
        //            [action.payload.userId]: Object.assign({}, existingRecord, action.payload)
        //        })
        //    })



        default:
            return state;
    }
}
