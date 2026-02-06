function Hello({name="Gust", age="0", city="Nowhere", hobbies}) {


    return (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Address: {city}</p>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </>
    )
}
export default Hello;