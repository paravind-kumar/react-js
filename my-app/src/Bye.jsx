import styles from './Bye.module.css';

function Buye() {

    const user = [
        {firstName: 'John',lastName: 'Doe',age: 30},
        {firstName: 'Jane',lastName: 'Smith',age: 25},
        {firstName: 'Bob',lastName: 'Johnson',age: 35},
        {firstName: 'Alice',lastName: 'Williams',age: 28},
        {firstName: 'Michael',lastName: 'Brown',age: 40}
    ]

    function fullName(user) {
        return user.firstName + " " + user.lastName
    }
    return (
        <>
            <h1 className={styles.test}>Bye Component</h1>
            <h2>Persion Details</h2>
            <ul>
                {user.map((user) => (
                    <li>{fullName(user)} is {user.age} old</li>
                ))}
            </ul>
        </>
    );
}

export default Buye;