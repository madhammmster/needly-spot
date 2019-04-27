import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.scss';

const MenuItem = ({label, path}) => {
    return (
        <NavLink
            exact
            to={path}
        >
            <div className='menu-item'>{label}</div>
        </NavLink>
    )
}

class Menu extends Component {


    render() {
        const { items } = this.props;

        return (
            <aside className='container-menu'>

                <div className='container-logo'>

                    <i className="logo fas fa-home"></i>

                    <div className='logo-title'>
                        Needly Spot
                    </div>

                    <div className='logo-subtitle'>
                        Znajdź swoje miejsce do pracy
                    </div>
                </div>

                <div className='menu'>
                    {
                        items && items.map((item) => (<MenuItem 
                            key={item.label}
                            {...item}
                        />))
                    }


                  
                </div>


            </aside >
        )
    }

}

export default Menu;