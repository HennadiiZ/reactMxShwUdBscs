import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    // console.log("1", enteredExpenseData);
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    // console.log("2", expenseData);
    props.onAddExpense(expenseData);
  };  

  return (
    <div className='new-expense'>
      {/* <form>
      </form> */}
      <ExpenseForm
       onSaveExpenseData={onSaveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;