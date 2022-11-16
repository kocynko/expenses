import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 2,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 399, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 120,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('in app js');
    console.log(expense);
  };

  return (
    <div className="view_transactions">
      <div className="navbar"></div>
      <div className="transactions">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={expenses}></Expenses>
      </div>
    </div>
  );
}

export default App;
