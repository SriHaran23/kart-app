import React, { useState } from 'react';
import ShowOrHideEye from '../../svg/ShowOrHideEye';

const InputField = ({ label, type, id, value, setLoginData }) => {
  const [isShow, setIsShow] = useState(false)
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({ ...prevState, [id]: value }));
  };

  return (
    <div className="text-input-container">
      <label htmlFor={id} className={value || isFocused ? 'focused' : ''}>
        {label}
      </label>
      {type != "password"
        ? <input
          className='inputField'
          type={type}
          id={id}
          value={value[id]}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={`Enter Your ${id}`}
        />
        : <div className='input-group mb-3'>
          <input
            className='form-control my-0'
            type={isShow ? 'text' : 'password'}
            value={value[id]}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={`Enter Your ${id}`}
          />
          <span className='input-group-text' id='basic-addon2'>
            <ShowOrHideEye isShow={isShow} setIsShow={setIsShow} />
          </span>
        </div>
      }
    </div>
  );
};

export default InputField;
