import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter/ExpensesFilter';

const App = () => {
  const expenses = [
    { id:'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { id:'e2', title: 'new TV', amount: 200, date: new Date(2021, 3, 28) },
    { id:'e3', title: 'food', amount: 100, date: new Date(2021, 3, 19) },
    { id:'e4', title: 'drinks', amount: 10, date: new Date(2021, 3, 15) },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>

      {/* <ExpensesFilter/>  */}
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
