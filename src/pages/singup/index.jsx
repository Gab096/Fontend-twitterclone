import React from 'react';
import Bluebird from '../../assets/icon/iconmonstr-twitter-1.svg';
import Input from '../../components/atomic/Input';
import './style.css';
import Button from '../../components/atomic/button';
import api from '../../services/api';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const SingUp = () => {
  const history = useHistory();
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(login, password, email)
    const mytimeout = () => setTimeout(() => {
      history.push('/')
    }, 2500);
    mytimeout()
    const data = await api.post('/register', { login, password, email });
    console.log(data);
    toast.success('Cadastrando usuário', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,

    }
    )
  }



  return (
    <>
      <div className='container'>
        <form className='whitecontainer' onSubmit={handleSignUp}>
          <img src={Bluebird} alt='bluebird' className='bluebird' />

          <h1>Cadastrar-se</h1>
          <div className='loginconteiner'>
            <label id='login'>Login</label>
            <Input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              id='Login'
              type='text'
              required={true}
            />
            <label id='email'>E-mail</label>
            <Input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <label id='password'>Senha</label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id='password'
              type='password'
              required={true}
            />
            <Button title='Cadastrar' alignself='center' />
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default SingUp;
