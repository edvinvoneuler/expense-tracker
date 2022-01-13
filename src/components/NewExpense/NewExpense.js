import { useState } from 'react';
import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css';

export const NewExpense = (props) => {

  const [formOpen, setFormOpen] = useState(false)

  const saveExpenseDateHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    stopEditingHandler()
  }

  const startEditingHandler = () => {
    setFormOpen(true)
  }
  const stopEditingHandler = () => {
    setFormOpen(false)
  }

  const newExpenseContent = formOpen ? (
    <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDateHandler} />
  ) : (
    <button onClick={startEditingHandler}>Add New Expense</button>);

  return (
    <div className='new-expense'>
      {newExpenseContent}
    </div>
  )
}