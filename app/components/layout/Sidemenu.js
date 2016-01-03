import React, { Component } from 'react'

import MenuLink from './Menulink'

class Sidemenu extends Component {
    render() {
        const links = [
            { label: 'Home', class: 'home', icon: 'fa-home' },
            { label: 'Stats', icon: 'fa-bar-chart' },
            { label: 'Settings', icon: 'fa-cog' }
        ].map((link, index) =>
            <MenuLink
                key={index}
                label={link.label}
                class={link.class}
                icon={link.icon}
            />
        )

        return (
            <div className="sidemenu-wrapper">
                <div className="sidemenu-nav">
                    { links }
                </div>
            </div>
        )
    }
}

export default Sidemenu
