import { useState } from "react";

function AdvancedForm() {
  const [formData, setFormData] = useState({
    gender: "",
    country: "",
    skills: [],
  });

  // Handle radio & select
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle checkbox
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => {
      if (checked) {
        return { ...prev, skills: [...prev.skills, value] };
      } else {
        return {
          ...prev,
          skills: prev.skills.filter((skill) => skill !== value),
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h2>Advanced Form Component</h2>

      <form onSubmit={handleSubmit}>
        {/* Radio Buttons */}
        <div>
          <p>Gender:</p>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        {/* Select Dropdown */}
        <div>
          <p>Country:</p>
          <select name="country" onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="usa">USA</option>
            <option value="india">India</option>
            <option value="uk">UK</option>
          </select>
        </div>

        {/* Checkboxes */}
        <div>
          <p>Skills:</p>
          <label>
            <input
              type="checkbox"
              value="React"
              onChange={handleCheckboxChange}
            />
            React
          </label>

          <label>
            <input
              type="checkbox"
              value="Node"
              onChange={handleCheckboxChange}
            />
            Node
          </label>

          <label>
            <input
              type="checkbox"
              value="CSS"
              onChange={handleCheckboxChange}
            />
            CSS
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdvancedForm;
