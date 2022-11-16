import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div className="expense-item__date">
      <div className="expense-item__date_day">{day}</div>
      <div className="expense-item__date_month">{month}</div>
      <div className="expense-item__date_year">{year}</div>
    </div>
  );
}
export default ExpenseDate;
