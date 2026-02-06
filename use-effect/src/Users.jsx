import { useState, useEffect } from 'react'

export default function Users() {
    const [users, setUsers] = useState(window.innerWidth)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))        
    }, [])

  return (
    <div>
        <h1>Users List</h1>
        {Array.isArray(users) && users.map(user => (
            <li key={user.id}>{user.id}. {user.name} - {user.email}</li>
        ))}

    </div>
  )
}
