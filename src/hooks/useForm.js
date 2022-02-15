import React from 'react';
import { flushSync } from 'react-dom';

const types = {
  email:{
    regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
    message: 'preencha um email valido',
  }
}

function useForm(type){
  const [value,setValue] = React.useState('')
  const [error ,seterror] = React.useState('null')

  function validate(value) {
    if (type === false)  return true;
    if (value.length === 0) {
    seterror('preencha um valor.');
    return false;
  } else if (types[type] && types[type].regex.test(value)){
    seterror(types[type].message);
    return false;
  } else {
    seterror(null);
    return true
  }
}

  function onChange({target}) {
   if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onblur:() => validate(value),
  };
};


export default useForm;