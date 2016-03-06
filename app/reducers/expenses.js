import { ADD_EXPENSE, EDIT_EXPENSE, DELETE_EXPENSE, TOGGLE_EXPENSE_FORM } from '../constants/ActionTypes'

const initialState = {
    expenses: [],
    expenseForm: {
        visible: false
    }
}

export default function expenses (state = initialState, action) {
    switch (action.type) {
        case ADD_EXPENSE:
            return Object.assign({}, state, {
                expenses: [...state.expenses, {
                    id: state.expenses.reduce((maxId, expense) => Math.max(expense.id, maxId), -1) + 1,
                    title: action.title
                }]
            })

        case EDIT_EXPENSE:
            return Object.assign({}, state, {
                expenses: state.expenses.map(expense =>
                    expense.id === expense.id ? Object.assign({}, expense, { title: expense.title }) : action.title
                )
            })

        case DELETE_EXPENSE:
            return Object.assign({}, state, {
                expenses: state.expenses.filter(expense =>
                    expense.id !== action.id
                )
            })

        case TOGGLE_EXPENSE_FORM:
            return Object.assign({}, state, {
                expenseForm: {
                    visible: !state.expenseForm.visible
                }
            })

        default:
            return state
    }
};
