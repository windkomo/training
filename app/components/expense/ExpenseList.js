import React, { Component, PropTypes } from 'react';

import Expense from './Expense';

class ExpenseList extends Component {
    render () {
        const { expenses, actions } = this.props
        let expenseComponents = expenses.map(e =>
          <Expense
              key={e.id}
              title={e.title}
              description={e.description}
              {...actions}
          />);

        return (
            <ul className="expense-list">
                <li>
                    { expenseComponents }
                </li>
            </ul>
        );
    }
}

ExpenseList.propTypes = {
    expenses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

export default ExpenseList;
