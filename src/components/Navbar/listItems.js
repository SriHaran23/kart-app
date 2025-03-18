import React, { useContext, useEffect, useState } from 'react'
import LoginPage from '../LogIn'
import ArrowUp from '../../svg/ArrowUp'
import ArrowDown from '../../svg/ArrowDown'
import { toast, ToastContainer } from 'react-toastify'

const ListItems = ({ login, isOpen1, setIsOpen1, setLogin }) => {
    const [isRightPanelActive, setRightPanelActive] = useState(false);
    const loggedIn = (data) => {
            data ? toast.success("Loggedin Successfully")
                : toast.error("Login Error")
    }
    const handleLogout = (e) => {
        localStorage.removeItem("login")
        setLogin(null)
        toast.success("LoggedOut successfully")
    };
    useEffect(() => {
        console.log("ddddddd", login);
        
    }, [login])

    return (
        <div>
            <ul className="navbar-nav ms-auto mt-2 mb-2 mb-lg-0 text-dark gap-3 lh-1 fs-5">
                <li className='d-inline-flex align-items-center gap-2 gap-md-1' /* onClick={() => setIsOpen(!isOpen)} */>
                    <span className="notification lh-1 position-relative p-1"><i className="bi bi-bell">
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger px-1" style={{ fontSize: '8px' }}>
                            99+
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </i></span>
                    <span className="d-flex d-md-none">Notifications</span>
                </li>
                <li className='d-inline-flex align-items-center gap-2 gap-md-1' /* onClick={() => setIsOpen(!isOpen)} */>
                    <span className="cart lh-1"><i className="bi bi-bag-heart"></i></span>
                    <span className="">Cart</span>
                </li>
                <li className='d-inline-flex'>
                    {!login?.username ? (
                        <span className="dropdownText d-flex align-items-center gap-2 gap-md-1 fs-5" data-bs-toggle="modal" data-bs-target="#loginModal">
                            <span className=''><i className="bi bi-person-circle"></i></span>
                            <span className="">Login</span>
                        </span>
                    ) : (
                        <div className="dropdown nav-link-item" onClick={() => setIsOpen1(!isOpen1)}  >
                            <span className="dropdownText d-flex align-items-center gap-1">
                                <span className=''>
                                    <img className='rounded-pill' src={login?.image} alt="Next.js logo" style={{ width: '40px' }} />
                                </span>
                                <span className="arrow">{login?.firstName}</span>
                                <span>{isOpen1 ? <ArrowUp /> : <ArrowDown />}</span>
                            </span>
                            {isOpen1 && (
                                <div className="dropdownContent px-2">
                                    <div className='d-flex py-2'>
                                        <div className='w-25'><i className="bi bi-person-circle"></i></div>
                                        <p className='w-75 p-0'> My Profile</p>
                                    </div>
                                    <hr className='my-0' />
                                    <div className='d-flex py-2'>
                                        <div className='w-25'><i className="bi bi-heart"></i></div>
                                        <p className='w-75 p-0'> My Wishlist</p>
                                    </div>
                                    <hr className='my-0' />
                                    <div className='d-flex py-2'>
                                        <div className='w-25'><i className="bi bi-box-seam"></i></div>
                                        <p className='w-75 p-0'> My Orders</p>
                                    </div>
                                    <hr className='my-0' />
                                    <div className='d-flex py-2'>
                                        <div className='w-25'><i className="bi bi-box-arrow-right"></i></div>
                                        <p className='w-75 p-0' onClick={() => handleLogout()}>Logout</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </li>
            </ul>
            <div className="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg px-0">
                    <div className="modal-content m-4 m-md-0 position-relative">
                        <LoginPage loggedIn={loggedIn} isRightPanelActive={isRightPanelActive} setRightPanelActive={setRightPanelActive} />
                        <button type="button" className="btn close-btn" data-bs-dismiss="modal" aria-label="Close">
                            <i className={`bi bi-x-lg ${isRightPanelActive ? "text-dark" : "text-light"} `}></i>
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={1500} />
        </div>
    )
}

export default ListItems