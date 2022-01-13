import { useState } from "react";
import { ExpensesChart } from "../Chart/ExpensesChart";
import { Card } from "../UI/Card";
import { ExpenseFilter } from "./ExpenseFilter";
import "./Expenses.css"
import { ExpensesList } from "./ExpensesList";

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filteredChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
  )
}