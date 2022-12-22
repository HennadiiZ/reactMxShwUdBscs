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
  // console.log(...filteredExpenses);

  return (
    <div>
      <Card className="expenses">

        <ExpensesFilter 
          initialSelected={filteredYear} 
          onChangeFilter={filterChangeHandler}
        /> 

        {filteredExpenses.map((item) => (  
          <ExpenseItem 
            key={item.id}
            title={item.title} 
            amount={item.amount} 
            date={item.date}
          />
        ))}
        
        {/* {props.items.map((item) => {
          return  <ExpenseItem 
                    key={item.id}
                    title={item.title} 
                    amount={item.amount} 
                    date={item.date}
                  />
        })} */}
      </Card>
    </div>
  )
}

export default Expenses;