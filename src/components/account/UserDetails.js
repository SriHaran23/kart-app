import React, { useContext } from 'react'
import { LoginContext } from '../../App';
import './style.css'
import InputField from '../inputField';

const UserDetails = () => {
    const { login, setLogin } = useContext(LoginContext);

    return (
        <div className='accountDetails p-3'>
            <h4 className='fw-semibold'>User Details</h4>
            <div className='row'>
                <div className='col-8'>
                    <div className='row row-cols-2 m-4 row-gap-5'>
                        <div className='col'>
                            {/* <b>first name :</b>
                            <p>{login?.firstName}</p> */}
                            <InputField label={"First Name"} name={"firstName"} type={"text"} />
                        </div>
                        <div className='col'>
                            {/* <b>last name :</b>
                            <p>{login?.lastName}</p> */}
                            <InputField label={"Last Name"} name={"lastName"} type={"text"} />

                        </div>
                        <div className='col'>
                            <InputField label={"User Name"} name={"username"} type={"text"} />
                        </div>
                        <div className='col'>
                            <InputField
                                label="Gender"
                                type="radio"
                                name="gender"
                                options={[
                                    { label: "Male", value: "male" },
                                    { label: "Female", value: "female" }
                                ]}
                            />
                        </div>
                        <div className='col'>
                            <InputField label={"Email Id"} name={"email"} type={"email"} />
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='d-flex justify-content-center'>
                        <img className='w-75' src={login?.image} alt="userImg" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserDetails
