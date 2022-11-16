import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

function ExpenseItem(props) {
  const [counter, setCounter] = useState(1);
  const [title, setTitle] = useState(props.title);
  const [date, setDate] = useState(props.date);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setAmount(20 * counter);
    setDate(new Date());
    setTitle(`Updated for ${counter} times`);
    setCounter(counter + 1);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount.toFixed(2)}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
