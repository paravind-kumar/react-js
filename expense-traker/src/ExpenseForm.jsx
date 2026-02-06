import { useState, useRef } from "react"

export default function ExpenseForm({ onAddExpense }) {

    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const titleRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!title || !amount) return alert("Please fill in all fields")

        const newExpense = {
            id: Date.now(),
            title,
            amount: parseFloat(amount)
        }
        // Pass the new expense to the parent component
        onAddExpense(newExpense)

        // Clear the form fields

        setTitle("")
        setAmount("")
        titleRef.current.focus()
    }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
        <input 
            type="text" 
            id="title" 
            placeholder="Expense title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            ref={titleRef}
         />
        <input 
            type="number" 
            id="amount" 
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} 
        />
        <button type="submit">Add Expense</button>
    </form>
  )
}
