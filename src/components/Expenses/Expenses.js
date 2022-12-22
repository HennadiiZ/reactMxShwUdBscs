import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  let filteredExpenses = props.items.filter((expense,i) => {
    return expense.date.getFullYear().toString() ===  filteredYear;
  });

  let expensesContent = <p>No data found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (  
      <ExpenseItem 
        key={item.id}
        title={item.title} 
        amount={item.amount} 
        date={item.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">

        <ExpensesFilter 
          initialSelected={filteredYear} 
          onChangeFilter={filterChangeHandler}
        /> 
        {expensesContent}
      </Card>
    </div>
  )
}

export default Expenses;