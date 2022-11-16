import React, { useState } from 'react';

import './ExpenseForm.css';
import Button from '../UI/Button';

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    titleInput: '',
    amountInput: '0.01',
    dateInput: '',
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, titleInput: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amountInput: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, dateInput: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      title: userInput.titleInput,
      amount: userInput.amountInput,
      date: new Date(userInput.dateInput),
    };
    props.onSaveExpenseData(enteredData);

    setUserInput({
      titleInput: '',
      amountInput: '',
      dateInput: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.titleInput}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amountInput}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.dateInput}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <Button type="submit">Add expense</Button>
          <Button type="button" onClick={props.showForm}>
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
