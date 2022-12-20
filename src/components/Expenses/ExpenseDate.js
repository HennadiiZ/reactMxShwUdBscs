import './ExpenseDate.css';

// function ExpenseDate(props) {
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long'});
    const day = props.date.toLocaleString('en-US', { day: '2-digit'});
    const year = props.date.getFullYear();

  return (
    <div className='date-item'>
      <div className='date-item__month'>{month}</div>
      <div className='date-item__day'>{day}</div>
      <div className='date-item__year'>{year}</div>
    </div>
  );
}

export default ExpenseDate;