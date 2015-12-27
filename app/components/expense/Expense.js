import React from 'react';
import { Panel } from 'react-bootstrap';

class Expense extends React.Component {
    displayName: 'Expense'
    propTypes: {
        title: React.PropTypes.string,
        description: React.PropTypes.string
    }
    render () {
        return (
            <div>
                <Panel
                    bsStyle="primary"
                    header={ this.props.title }
                >
                    { this.props.description }
                </Panel>
            </div>
        );
    }
}

Expense.defaultProps = {
    title: 'Untitled expense',
    description: 'No description'
};

export default Expense
