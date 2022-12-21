import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'; 
// import React, { useState } from 'react';
import React from 'react';

// THIS IS a state LESS COMPONENT (presentational or dumb component)

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle('Clicked!');
  // };

  return (
    <Card className='expense-item'>
      <div>
        <ExpenseDate date={props.date}/>
      </div>

      <div className='expense-item__description'>
        {/* <h2>{title}</h2> */}
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
  );
}

export default ExpenseItem;