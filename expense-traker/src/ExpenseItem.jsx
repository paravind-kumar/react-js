
export default function ExpenseItem({ item, onDelete }) {
  return (
    <>
        <tr>
            <td>{item.title}</td>
            <td>₹{item.amount}</td>
            <td><button className="delete-btn" onClick={() => onDelete(item.id)}>Delete</button></td>
        </tr>            
    </>
  )
}
