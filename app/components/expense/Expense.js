import React, { PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

class Expense extends React.Component {
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

Expense.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

Expense.defaultProps = {
    title: 'Untitled expense',
    description: 'No description'
}

export default Expense
