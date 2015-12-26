import React from 'react';

import Expense from './Expense';

class ExpenseList extends React.Component {
    render () {
        var data = [
            { id: 1, title: 'G20 Food', description: 'Vegetables and steak' },
            { id: 2, title: 'Headset', description: 'Fidelio X2' }
        ];
        var expenses = data.map( e => <Expense key={ e.id } title={ e.title } description= { e.description } /> );

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
