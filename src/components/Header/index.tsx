import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import { MouseEventHandler } from 'react';

interface HeaderProps {
  onOpenNewTransactionModal: MouseEventHandler;
}

const Header: React.FC<HeaderProps> = ({ onOpenNewTransactionModal }) => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="fs money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
};

export { Header };
