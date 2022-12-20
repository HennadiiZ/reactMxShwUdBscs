import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'; 

// function ExpenseItem(props) {
const ExpenseItem = (props) => {
  // document.getElementById('root').addEventListener();

  const clickHandler = () => {
    console.log('Clicked!');
  };

  return (
    // <div className='expense-item'>
    //   <div>
    //     <ExpenseDate date={props.date}/>
    //   </div>

    //   <div className='expense-item__description'>
    //     <h2>{props.title}</h2>
    //     <div className='expense-item__price'>${props.amount}</div>
    //   </div>
    // </div>
  
    <Card className='expense-item'>
      <div>
        <ExpenseDate date={props.date}/>
      </div>

      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={() => {console.log('Clicked!')}}>Change title</button> */}
      {/* <button onClick={() => clickHandler()}>Change title</button> */}
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;