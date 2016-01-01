import React, { PropTypes, Component } from 'react'

class Sidemenu extends Component {
    render() {
        return (
            <div className="sidemenu-wrapper">
                <div className="sidemenu-nav">
                    <a className="home">
                        <li className="fa fa-home" />
                    </a>
                    <a className="home">
                        <li className="fa fa-bar-chart" />
                    </a>
                </div>
            </div>
        )
    }
}

Sidemenu.propTypes = {
}

export default Sidemenu
