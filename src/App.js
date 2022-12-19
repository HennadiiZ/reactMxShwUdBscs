// import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  // const paragraph = document.createElement('p');
  // paragraph.textContent = '...';
  // document.getElementById('root').appendChild(paragraph);
  // document.getElementById('root').innerHTML = 'HELLO!'

  // const expenseDate = new Date(2021, 2, 28); 
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67; 

  const expenses = [
    { id:'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { id:'e2', title: 'new TV', amount: 200, date: new Date(2021, 3, 28) },
    { id:'e3', title: 'food', amount: 100, date: new Date(2021, 3, 19) }
  ];

  for(let i = 0; i < expenses.length; i++) {
    // console.log(expenses[i]);
    return <ExpenseItem title={expenses[i].title} amount={expenses[i].amount} date={expenses[i].date}/>
  }

  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <h2>start</h2>
    //    <p>2</p>
    //   </header> */}
    // </div>

    <div>
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
        {/* <ExpenseItem></ExpenseItem> */}
    </div>

  );
}

export default App;
