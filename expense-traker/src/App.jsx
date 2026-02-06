import { useState, useEffect } from "react"
import "./App.css"
import ExpenseForm from "./ExpenseForm"
import ExpenseList from "./ExpenseList"

export default function App() {

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved) : []
  })


  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  },[expenses])

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense])
  }

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id))
  }

  const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className="expense">
      <h2>Expense Tracker</h2>
      <ExpenseForm onAddExpense={addExpense} />
      <h4>Total Expense: ₹{totalExpense.toFixed(2)}</h4>
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
    </div>
  )
}

