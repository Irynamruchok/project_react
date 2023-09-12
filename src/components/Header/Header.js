import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css'
const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.link}>
                <Link to={'movies'}>Movies</Link>
                <Link to={'genres'}>Genres</Link>
                <Link to={'search'}>Search</Link>
            </div>
            <div className={css.user}>
                User
            </div>
        </div>
    );
};

export default Header;