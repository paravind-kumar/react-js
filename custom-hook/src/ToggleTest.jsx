import useToggle from "./hooks/UseToggle";

function ToggleTest(){
    const [isOpen, toggleOpen] = useToggle()
    const [isTest, toggleTest] = useToggle()

    return(
        <div>
            <div>
                <button onClick={toggleOpen}>Toggle</button>
                {isOpen && <p>Hello, this is visible!</p>}
            </div>
            <br />
            <div>
                <button onClick={toggleTest}>Toggle Test</button>
                {isTest && <p>Hello, this is Pravind!</p>}
            </div>
        </div>
    )
}

export default ToggleTest;