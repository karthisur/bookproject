import React, { useState } from "react";
import './DataTable.css'; // Import the CSS file

function DataTable() {
  const [formData, setFormData] = useState({ name: "", email: "", number: "", gender: "", address: "", pincode: "", orderItem: "" });
  const [tableData, setTableData] = useState([]);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({ name: "", email: "", number: "", gender: "", address: "", pincode: "", orderItem: "" }); // Clear form after submission
  };

  // Handle delete row
  const handleDelete = (index) => {
    const newData = tableData.filter((_, i) => i !== index);
    setTableData(newData);
  };

  return (
    <div className="container">
      <h2>React Form with Dynamic Table</h2>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Order Item:</label>
          <select
            name="orderItem"
            value={formData.orderItem}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select an item</option>
            <option value="Comic Books">Comic Books</option>
            <option value="Ghost Book">Ghost Book</option>
            <option value="The Time Machine">The Time Machine</option>
            <option value="Gruffalo's Book">Gruffalo's Book</option>
            <option value="Lost World">Lost World</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Order Item</th>
            <th>Order Cancel</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.number}</td>
              <td>{row.gender}</td>
              <td>{row.address}</td>
              <td>{row.pincode}</td>
              <td>{row.orderItem}</td>
              <td>
                <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
