import React from 'react';
import { Container } from './styles';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
const Summary: React.FC = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="" />
        </header>
        <strong>R$2000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcome} alt="" />
        </header>
        <strong>-R$1000,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={total} alt="" />
        </header>
        <strong>R$1000,00</strong>
      </div>
    </Container>
  );
};

export { Summary };
