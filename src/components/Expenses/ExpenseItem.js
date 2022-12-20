import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'; 

// function ExpenseItem(props) {
const ExpenseItem = (props) => {
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
    </Card>
  );
}

export default ExpenseItem;