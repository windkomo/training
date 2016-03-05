import React, { PropTypes, Component } from 'react'

class Toggler extends Component {
    render() {
        const { label, onToggle, buttonClasses, iconClasses } = this.props
        return (
            <div>
                <a
                    className={buttonClasses}
                    onClick={onToggle}
                >
                    <i
                        className={iconClasses}
                    /> {label}
                </a>
            </div>
        )
    }
}

Toggler.propTypes = {
    label: PropTypes.string,
    onToggle: PropTypes.func.isRequired,
    buttonClasses: PropTypes.string,
    iconClasses: PropTypes.string
}

export default Toggler
