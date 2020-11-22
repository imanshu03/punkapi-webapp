import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Header = () => {

    return (
        <div className='header'>
            <h2>BeansLoveBeers</h2>
            <div className='links'>
                <NavLink to='/home'>Home</NavLink>
                <NavLink exact to='/favourites'>Favourites</NavLink>
            </div>
        </div>
    );
};

export default withRouter(Header);