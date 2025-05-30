import React, { useContext } from 'react'
import './style.css'
import { LoginContext } from '../../App';

const InputField = ({label,name,type,options}) => {
      const { login, setLogin } = useContext(LoginContext);
  
  return (
    <div className="inputGroup">
        <label htmlFor="name">{label}</label>
        {type === "radio" && options ? 
            (
          <div className='d-flex align-items-center gap-3'>{
        options.map((option, index) => (
          <div key={index} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              disabled={login}
              checked={login[name]==option.value}
              required
            />
            <label className="form-check-label" htmlFor={`${name}-${option.value}`}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
      ) 

      : (
        <input className="form-control" type={type} name={name} disabled={login} value={login[name]} required />
      )}
      {/* <input className='form-control' type={type} required="" /> */}
    </div>
  )
}

export default InputField
