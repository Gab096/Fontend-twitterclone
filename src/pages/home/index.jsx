import Button from '../../components/atomic/button';
import Whitebird from '../../assets/icon/icontwitterbranco.svg';
import Bluebird from '../../components/atomic/boxtwobluebird';
import Divider from '../../components/atomic/divider';
import './style.css';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';

import { ReactComponent as GoogleIcon } from '../../assets/icon/google.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icon/facebook.svg';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const Home = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };
  const history = useHistory();

  const Handleclicksingup = () => {
    history.push('singup');
  };
  const Handleclick = () => {
    history.push('Login');
  };

  return (
    <div className='mother-box'>
      <div className='box-1'>
        <img className='whitebird' src={Whitebird} alt='whitebird' />
      </div>

      <div className='box-2'>
        <div className='innerbox-2'>
          <Bluebird></Bluebird>
          <h1>Acontecendo agora</h1>
          <h2>Inscreva-se no twitter hoje mesmo.</h2>
          <GoogleLogin
            clientId='8236464178-32kouce42s757lglo6esk52bc7efihct.apps.googleusercontent.com'
            render={(renderProps) => (
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  style={{
                    display: 'flex',
                    marginTop: '32px',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <GoogleIcon style={{ marginRight: '10px' }} />
                  Entrar com google
                </button>
              </div>
            )}
            buttonText='Login'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />

          <FacebookLogin
            cssClass='changer'
            appId='295428345832379'
            autoLoad
            callback={responseFacebook}
            render={(renderProps) => (
              <button
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onClick={renderProps.onClick}
              >
                <FacebookIcon style={{ marginRight: '5px' }} />
                <label> entrar com Facebook</label>
              </button>
            )}
          />

          <Divider />
          <div>
            <Button
              onClick={Handleclicksingup}
              backgroundColor='#0f99fa'
              color='white'
              title='cadastrar-se'
            />
          </div>
          <p className='terms'>
            "Ao se inscrever, você concorda com os <a href='https://twitter.com/pt/tos' target="_blanck"> Termos de Serviço</a> e a
            <a href='https://twitter.com/pt/privacy' target="_blanck" > Política de Privacidade</a>, incluindo o <a href='https://help.twitter.com/pt/rules-and-policies/twitter-cookies' target="_blanck"> Uso de Cookies</a>."
          </p>
          <h3>Já tem uma conta?</h3>

          <Button onClick={Handleclick} title='Entrar' color='#0f99fa' />
        </div>
      </div>
    </div>
  );
};
export default Home;
