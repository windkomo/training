import { combineReducers } from 'redux'
import expenses from './expenses'
import expenseForm from './expenseForm'

const rootReducer = combineReducers({
    expenses,
    expenseForm
})

export default rootReducer
