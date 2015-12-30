import { ADD_EXPENSE, EDIT_EXPENSE, DELETE_EXPENSE } from '../constants/ActionTypes'

const initialState = []

export default function expenses (state = initialState, action) {
    switch (action.type) {
        case ADD_EXPENSE:
            return [
                ...state, {
                    id: state.reduce((maxId, expense) => Math.max(expense.id, maxId), -1) + 1,
                    title: action.title
                }
            ]

        case EDIT_EXPENSE:
            return state.map(expense =>
                expense.id === expense.id ? Object.assign({}, expense, { title: expense.title }) : action.title
            )

        case DELETE_EXPENSE:
            return state.filter(expense =>
                expense.id !== action.id
            )

        default:
            return state
    }
};
