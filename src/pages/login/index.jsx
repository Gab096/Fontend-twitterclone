/** @format */

import api from '../../services/api';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Bluebird from '../../assets/icon/iconmonstr-twitter-1.svg';
import Input from '../../components/atomic/Input';
import './style.css';
import Button from '../../components/atomic/button';
import { useHistory } from 'react-router';

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const history = useHistory();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      await api.post('/login', { email, password });
      history.push('/twitter');
    } catch (error) {
      toast.error(error.response.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <div className='container'>
        <form className='whitecontainer' onSubmit={handleLogin}>
          <img src={Bluebird} alt='bluebird' className='bluebird' />
          <h1>Login</h1>
          <div className='loginconteiner'>
            <label id='login'>E-mail:</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='login'
              type='text'
              required={true}
            />
            <label id='password'>Senha:</label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id='password'
              type='password'
              required={true}
            />
            <Button title='Entrar' alignself='center' />
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
