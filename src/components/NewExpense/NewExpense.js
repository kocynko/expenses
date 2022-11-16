import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import Card from '../UI/Card';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (eneteredExpenseData) => {
    const expenseData = {
      ...eneteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Card>
  );
};

export default NewExpense;
