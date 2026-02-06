import { useState } from 'react'

function Student() {

    const [student, setStudent] = useState({
        name : "Guest",
        grade : "A",
        city : "Lucknow"
    })

    const changeCity = () => {
        setStudent({
            ...student,
            city : "Kanpur"
        })
    }

  return (
    <>
        <h2>Name: {student.name}</h2>
        <h2>Grade: {student.grade}</h2>
        <h2>City: {student.city}</h2>

        <button onClick={changeCity}>Change City</button>
    </>
  )
}

export default Student