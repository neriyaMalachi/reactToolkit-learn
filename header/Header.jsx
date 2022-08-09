import React, { useContext, useEffect } from 'react'
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navBar'>
            <nav className='linkes'>
                <Link to="/home">Home</Link>
                <Link to="/user">user</Link>
                <Link to="/cards">cards</Link>
                <Link to ="/moviseApi">serch_movise</Link>
                <Link to="/homeCounter">home_counter</Link>
                <Link to ="/appToolkit">users_of_redux_toolkit</Link>
            </nav>
        </div>
    )
}
export default Header;