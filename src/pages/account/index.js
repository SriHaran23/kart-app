import React, { useContext } from 'react'
import { LoginContext } from '../../App';
import { NavLink, Outlet } from 'react-router-dom';

const Account = () => {
    const { login, setLogin } = useContext(LoginContext);
    console.log(login);

    return (
        <div className='profile row justify-content-around m-0 mt-2'>
            <div className='col-3 custom-card '>
                <div className="card-body p-2">
                    <div className="d-flex align-items-center gap-3 mb-2 pb-1 border-bottom">
                        <img className='rounded-pill' src={login?.image} alt="userImg" style={{ width: '60px' }} />
                        <div>
                            <p className='mb-0'>Hello,</p>
                            <p className='mb-0 fw-medium fs-5'>{login?.firstName} {login?.lastName}</p>
                        </div>
                    </div>
                    <div className=''>
                        <h4 className='fw-semibold'>Account Details</h4>
                        <ul className="list-group list-group-flush" style={{ cursor: "pointer" }}>
                            <li className="list-group-item "><NavLink to={'userDetails'}>User Details</NavLink></li> {/* active" aria-current="true */}
                            <li className="list-group-item "><NavLink to={'addressDetails'}>Manage Addresses</NavLink></li>
                        </ul>
                        <h4 className='fw-semibold'>My Stuff</h4>
                        <ul className="list-group list-group-flush" style={{ cursor: "pointer" }}>
                            <li className="list-group-item "><NavLink /* to={'userDetails'} */>My Wishlist</NavLink></li> {/* active" aria-current="true */}
                            <li className="list-group-item "><NavLink /* to={'addressDetails'} */>My Coupons</NavLink></li>
                            <li className="list-group-item "><NavLink /* to={'userDetails'} */>My Cart</NavLink></li>
                            <li className="list-group-item "><NavLink /* to={'userDetails'} */>My </NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-8 custom-card '>
                <div className="card-body p-2 scrollable-div flex-fill">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Account

// import React, { useState } from 'react';

// const ListGroup = () => {
//   const [activeIndex, setActiveIndex] = useState(0); // default active item index

//   const items = [
//     'User Details',
//     'A second item',
//     'A third item',
//     'A fourth item',
//     'And a fifth one',
//   ];

//   return (
//     <ul className="list-group list-group-flush" style={{ cursor: 'pointer' }}>
//       {items.map((item, index) => (
//         <li
//           key={index}
//           className={`list-group-item ${activeIndex === index ? 'active' : ''}`}
//           onClick={() => setActiveIndex(index)}
//           aria-current={activeIndex === index ? 'true' : undefined}
//         >
//           {item}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ListGroup;
