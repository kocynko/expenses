import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (eneteredExpenseData) => {
    const expenseData = {
      ...eneteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [showForm, setShowForm] = useState('false');

  const buttonHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <Card className="new-expense">
      {!showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          showForm={buttonHandler}
        />
      ) : (
        <Button type="button" onClick={buttonHandler}>
          Add new expense
        </Button>
      )}
    </Card>
  );
};

export default NewExpense;
