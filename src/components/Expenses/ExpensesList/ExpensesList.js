import './ExpensesList.css';
import React, { useState } from 'react';
import ExpenseItem from '../ExpenseItem'

const ExpensesList = (props) => {

  console.log(props.items);

  let expensesContent = <p>No data found.</p>; 

  if (props.items.length > 0) {
    expensesContent = props.items.map((item) => (  
      <ExpenseItem 
        key={item.id}
        title={item.title} 
        amount={item.amount} 
        date={item.date}
      />
    ));
  }

  return <ul className="expenses-list">
    {expensesContent}
  </ul>
}

export default ExpensesList;