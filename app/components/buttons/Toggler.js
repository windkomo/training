import React, { PropTypes, Component } from 'react'

class Toggler extends Component {
    render() {
        const {
            labelOff,
            labelOn,
            onToggle,
            buttonClassesOff,
            iconClassesOff,
            buttonClassesOn,
            iconClassesOn,
            toggled
        } = this.props
        return (
            <div>
                <a
                    className={ toggled ? buttonClassesOn : buttonClassesOff }
                    onClick={ onToggle }
                >
                    <i
                        className={ toggled ? iconClassesOn : iconClassesOff }
                    /> { toggled ? labelOn : labelOff }
                </a>
            </div>
        )
    }
}

Toggler.propTypes = {
    labelOff: PropTypes.string,
    labelOn: PropTypes.string,
    onToggle: PropTypes.func.isRequired,
    buttonClassesOff: PropTypes.string,
    iconClassesOff: PropTypes.string,
    buttonClassesOn: PropTypes.string,
    iconClassesOn: PropTypes.string,
    toggled: PropTypes.bool
}

export default Toggler
