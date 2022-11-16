import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2022');

  const onFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(filterYear);
  };
  return (
    <Card className="expenses">
      <div>
        <ExpenseFilter onFilter={onFilterHandler} filterYear={filterYear} />
      </div>
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
      />
      <ExpenseItem
        date={props.expenses[1].date}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
      />
      <ExpenseItem
        date={props.expenses[2].date}
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
      />
      <ExpenseItem
        date={props.expenses[3].date}
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
      />
    </Card>
  );
}
export default Expenses;
