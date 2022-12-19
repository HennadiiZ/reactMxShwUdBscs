import './App.css';
import ExpenseWrapper from './components/ExpenseWrapper';

function App() {
  const expenses = [
    { id:'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { id:'e2', title: 'new TV', amount: 200, date: new Date(2021, 3, 28) },
    { id:'e3', title: 'food', amount: 100, date: new Date(2021, 3, 19) },
    { id:'e4', title: 'drinks', amount: 10, date: new Date(2021, 3, 15) },
  ];

  return (
    <div>
      <h2>Let`s start !!!</h2>
     
      <div>
        <ExpenseWrapper expenses={expenses}/>
      </div>
    </div>
  );
}

export default App;
