import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'; 
import React, { useState } from 'react';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  // console.log('ExpenseItem evaluated by React!')
  const clickHandler = () => {
    setTitle('Clicked!');
    // console.log(title);
  };

  return (
    <Card className='expense-item'>
      <div>
        <ExpenseDate date={props.date}/>
      </div>

      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;