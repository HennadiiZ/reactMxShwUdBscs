import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear, props.items);
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">

        <ExpensesFilter 
          initialSelected={filteredYear} 
          onChangeFilter={filterChangeHandler}
        /> 
        
        {props.items.map((item) => {
          // console.log(item);
          return  <ExpenseItem 
                    title={item.title} 
                    amount={item.amount} 
                    date={item.date}
                  />
        })}

        {/* <ExpenseItem 
          title={props.expenses[0].title} 
          amount={props.expenses[0].amount} 
          date={props.expenses[0].date}
        />
        <ExpenseItem 
          title={props.expenses[1].title} 
          amount={props.expenses[1].amount} 
          date={props.expenses[1].date}
        />
        <ExpenseItem 
          title={props.expenses[2].title} 
          amount={props.expenses[2].amount} 
          date={props.expenses[2].date}
        />
        <ExpenseItem 
          title={props.expenses[3].title} 
          amount={props.expenses[3].amount} 
          date={props.expenses[3].date}
        /> */}
      </Card>
    </div>
  )
}

export default Expenses;