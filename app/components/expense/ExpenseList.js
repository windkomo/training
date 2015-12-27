import React from 'react';

import Expense from './Expense';

class ExpenseList extends React.Component {
    displayName: 'ExpenseList'
    render () {
        var data = [
            { id: 1, title: 'G20 Food', description: 'Vegetables and steak' },
            { id: 2, title: 'Headset', description: 'Fidelio X2' }
        ];
        var expenses = data.map(e =>
          <Expense
              description= { e.description }
              key={ e.id }
              title={ e.title }
          />);

        return (
            <ul className="expense-list">
                <li>
                    { expenses }
                </li>
            </ul>
        );
    }
}

export default ExpenseList
