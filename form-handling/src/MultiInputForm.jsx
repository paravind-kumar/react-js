import { useState } from "react";

function MultiInputForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value

        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    }   

    return (
        <form onSubmit={handleSubmit} style= {{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
            <h2>Multi-Input React Form</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>  
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Submit</button>

        </form>
    );
}  

export default MultiInputForm;