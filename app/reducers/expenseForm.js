import { TOGGLE_EXPENSE_FORM } from '../constants/ActionTypes'

const initialState = {
    visible: false
}

export default function expenseForm (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_EXPENSE_FORM:
            return Object.assign({}, state, {
                visible: !state.visible
            })

        default:
            return state
    }
};
