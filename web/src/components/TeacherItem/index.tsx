import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://api.adorable.io/avatars/162/abott@adorable.png"
          alt="Héliton Oliveira"
        />

        <div>
          <strong>Héliton Oliveira</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Instrutor de Educação Física para iniciantes, minha missão de vida é
        levar saúde e contribuir para o crescimento de quem se interessar.
        <br />
        <br />
        Comecei a minha jornada profissional em 2001, quando meu pai me deu dois
        alteres de 32kg com a seguinte condição: &quot;Aprenda a fazer dinheiro
        com isso!&quot;
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em catato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
