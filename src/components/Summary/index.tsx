import React, { useMemo } from 'react';
import { Container } from './styles';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

const Summary: React.FC = () => {
  const { transactions } = useTransactions();
  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'deposit') {
          acc.deposit += transaction.amount;
          acc.totalAmout += transaction.amount;
        } else {
          acc.withdraw += transaction.amount;
          acc.totalAmout -= transaction.amount;
        }
        return acc;
      },
      {
        deposit: 0,
        withdraw: 0,
        totalAmout: 0,
      }
    );
  }, [transactions]);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(summary.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcome} alt="" />
        </header>
        <strong>
          {`- ${new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(summary.withdraw)}`}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(summary.totalAmout)}
        </strong>
      </div>
    </Container>
  );
};

export { Summary };
