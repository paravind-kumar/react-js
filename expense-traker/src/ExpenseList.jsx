import ExpenseItem from "./ExpenseItem"

export default function ExpenseList({ expenses, onDeleteExpense }) {
    if (expenses.length === 0) {
        return <p className="no-expenses">No expenses added yet.</p>
    }
  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Amount (Rs)</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {expenses.map((item) => (
                <ExpenseItem key={item.id} item={item} onDelete={() => onDeleteExpense(item.id)} />
            ))}
            </tbody>
        </table>
    </>
  )
}
