import React from 'react';

import backgroundImg from '../../assets/images/Background.svg';
import proffyLogo from '../../assets/images/Proffy.svg';
import text from '../../assets/images/text.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

const Login: React.FC = () => {
  return (
    <div id="login-container">
      <div className="background">
        <img className="backgroundImg" src={backgroundImg} alt="Login" />
        <div className="container-logo">
          <img src={proffyLogo} alt="logo" />
          <img src={text} alt="Texto" />
        </div>
      </div>

      <div className="login">
        <h1>Fazer login</h1>

        <form>
          <input
            id="email"
            className="text-login"
            type="text"
            placeholder="E-mail"
          />
          <input
            id="password"
            className="text-login"
            type="text"
            placeholder="Senha"
          />

          <div className="forget">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" name="remember" />
              Lembrar-me
            </label>
            <span>Esqueci minha senha</span>
          </div>

          <button type="submit">Entrar</button>
        </form>

        <div className="footerr">
          <strong>
            Não tem conta?
            <span>Cadastre-se</span>
          </strong>

          <div className="image">
            <span>É de graça</span>
            <img src={purpleHeart} alt="Purple Heart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
