import './ExpenseItem.css';

function ExpenseItem(props) {
//   const expenseDate = new Date(2021, 2, 28); 
//   const expenseTitle = 'Car Insurance';
//   const expenseAmount = 294.67; 

// [title, amount, date]

console.log(props); // {title: 'Car Insurance', amount: 294.67, date: Sun Mar 28 2021 00:00:00 GMT+0200 (Eastern European Standard Time)}
const month = props.date.toLocaleString('en-US', { month: 'long'});
const day = props.date.toLocaleString('en-US', { day: '2-digit'});
const year = props.date.getFullYear();

  return (
    <div className='expense-item'>
      <div>
        {/* <div>Month</div>
        <div>Year</div>
        <div>Day</div> */}
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>

      {/* <p>{props.date.toISOString()}</p> */}
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;