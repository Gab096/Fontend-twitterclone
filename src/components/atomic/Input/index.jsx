import React from 'react';
import './style.css';

const Input = ({type,label,placeholder,required, value ,onChange,...props}) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input 
        type={type}
        placeholder={placeholder} 
        {...props} value={value} 
        onChange={onChange}
        required={required}
       />
    </div>
  );
};
export default Input;