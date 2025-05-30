'use client';

import React, { useState, useEffect, useContext } from 'react';
import ProfileIcon from '../../svg/ProfileIcon';
import "./style.css"
import ArrowUp from '../../svg/ArrowUp';
import ArrowDown from '../../svg/ArrowDown';
import CartIcon from '../../svg/CartIcon';
import NotificationIcon from '../../svg/Notification';
import FavouriteIcon from '../../svg/Favourite';
import OrderIcon from '../../svg/OrderIcon';
import { useNavigate } from 'react-router-dom';
import ListItems from './listItems';
import { CategoryContext, LoginContext } from '../../App';
import { decryptObject } from '../../functions';

const Navbar = ({ theme, setTheme }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen1, setIsOpen1] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const word = "GleeKart";
    const colors = ['#234C9B', '#8242A0', '#14B2CD', '#E73F7D', '#F5526D', '#FB7D30', '#F56E1C', '#F99D22'];
    const { login, setLogin } = useContext(LoginContext);
    const { selectedCategory, setSelectedCategory } = useContext(CategoryContext)


    useEffect(() => {
        const user = localStorage.getItem('login');
        const category = localStorage.getItem('category');
        if (user) {
            setLogin(JSON.parse(user))
            setIsLoggedIn(true);
        }
        if (category) {
            setSelectedCategory(category)
        }
    }, [])

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className='position-relative navbar-login'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between w-100 px-3 py-md-0">
                <div className="d-flex gap-3 w-100">
                    <div className="d-flex gap-3 w-100">
                        <a className="navbar-brand m-0 p-0 d-flex align-items-center" href="/">
                            <img className='lh-1' src='/assets/img/cart-logo.png' alt="Next.js logo" width={50} height={38} />
                            {word.split('').map((letter, index) => (
                                <span key={index} style={{ color: colors[index] }}>
                                    {letter}
                                </span>
                            ))}
                        </a>
                        <div className='d-none d-md-block search-bar w-50'>
                            <form className='search-input-container d-inline-flex my-2'>
                                <input type="text" name="search" placeholder="Search product items..." className="d-flex search-input rounded-pill flex-fill" />
                                <span className="search-icon">
                                    <i className="bi bi-search"></i>
                                </span>
                            </form>
                        </div>
                    </div>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ListItems login={login} isOpen1={isOpen1} setIsOpen1={setIsOpen1} setLogin={setLogin} />
                </div>
            </nav>

        </div>
    );
}

export default Navbar;