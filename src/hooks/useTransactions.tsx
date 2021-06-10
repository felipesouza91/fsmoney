import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  type: string;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
}

interface IAddTransaction {
  title: string;
  type: string;
  amount: number;
  category: string;
}

interface ITransactionsContextData {
  transactions: Transaction[];
  saveNewTransaction: (data: IAddTransaction) => Promise<void>;
}

const TransactionsContext = createContext<ITransactionsContextData>(
  {} as ITransactionsContextData
);

export const TransactionProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function saveNewTransaction({
    title,
    type,
    amount,
    category,
  }: IAddTransaction) {
    const data = {
      title,
      type,
      amount,
      category,
      createdAt: new Date(),
    };
    console.log(type);
    api
      .post('transactions', data)
      .then(({ data }) => setTransactions([...transactions, data.transaction]));
  }

  return (
    <TransactionsContext.Provider value={{ transactions, saveNewTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionsContext);
  return context;
};
