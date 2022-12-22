import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id:'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28) },
  { id:'e2', title: 'new TV', amount: 200, date: new Date(2021, 3, 28) },
  { id:'e3', title: 'food', amount: 100, date: new Date(2020, 3, 19) },
  { id:'e4', title: 'drinks', amount: 10, date: new Date(2020, 3, 15) },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=> {
      return [expense, ...prevExpenses];
      // return [...prevExpenses, expense];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
