import { useState } from "react";

function SimpleForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name:", name);
        console.log("Email:", email);
    }

  return (
    <form onSubmit={handleSubmit} style= {{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        <h2>React Form Example</h2>
      
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Name:</label>
            <input 
                type="text" 
                name="name"
                placeholder="Enter your name"
                value={name} 
                onChange={(e) => setName(e.target.value)} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Email:</label>
            <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;