import React from 'react';

class Expense extends React.Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    { this.props.title }
                </div>
                <div className="panel-body">
                    { this.props.description }
                </div>
            </div>
        );
    }
}

Expense.defaultProps = {
    title: 'Untitled expense',
    description: 'No description'
};

export default Expense
