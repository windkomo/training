import * as ActionTypes from '../constants/ActionTypes'

export function addExpense (title) {
    return {
        type: ActionTypes.ADD_EXPENSE,
        title
    }
}

export function editExpense (id, title) {
    return {
        type: ActionTypes.EDIT_EXPENSE,
        id,
        title
    }
}

export function deleteExpense (id) {
    return {
        type: ActionTypes.DELETE_EXPENSE,
        id
    }
}

export function toggleExpenseForm () {
    return {
        type: ActionTypes.TOGGLE_EXPENSE_FORM,
    }
}
