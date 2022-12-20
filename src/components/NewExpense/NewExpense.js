import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
  return (
    <div className='new-expense'>
      {/* <form>
      </form> */}
      <ExpenseForm/>
    </div>
  );
};

export default NewExpense;