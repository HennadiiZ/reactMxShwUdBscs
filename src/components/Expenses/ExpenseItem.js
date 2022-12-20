import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'; 
import React, { useState } from 'react';

const ExpenseItem = (props) => {
  // useState(props.title);
  const [title, setTitle] = useState(props.title);
  // let title = props.title;

  const clickHandler = () => {
    // console.log('Clicked!');
    // title = 'Clicked!';
    setTitle('Clicked!');
    console.log(title);
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
      {/* <button onClick={() => {console.log('Clicked!')}}>Change title</button> */}
      {/* <button onClick={() => clickHandler()}>Change title</button> */}
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;