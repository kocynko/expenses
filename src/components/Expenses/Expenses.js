import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('');

  const onFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter onFilter={onFilterHandler} filterYear={filterYear} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
