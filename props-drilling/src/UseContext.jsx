import React, { createContext, useContext } from 'react'

const UserConrtext = createContext()

function UseContext() {
    const user = {name: "Pravind Kumar", email: "kumarpravind496@gmail.com"}
  return (
    <>
        <UserConrtext.Provider value={user}>
            <Parent />
        </UserConrtext.Provider>
    </>
  )
}

function Parent() {
  return <Child />
}

function Child() {
  return <GrandChild />
}

function GrandChild() {
  const {name, email} = useContext(UserConrtext)
  return(
    <>
        <h2>My name is: {name}</h2>
        <h3>Email: {email}</h3>
    </>
  )
}

export default UseContext