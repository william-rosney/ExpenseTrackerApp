import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    // console.log(expenseData);
  };

  const toggleEditHandler = () => {
    setIsEditing(!isEditing);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
          <button onClick={toggleEditHandler}>Add New Expense</button>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={toggleEditHandler} />}
    </div>
  );
};

export default NewExpense;
