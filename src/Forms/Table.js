import React, { Component } from "react";
import './Table.css'
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>E_Mail</th>
        <th>Phone_Number</th>
        <th>Address</th>
        <th>Pincode</th>
        <th>Order_Item</th>
        <th>Your Order</th>
      </tr>
    </thead>
  );
};
const TableBody = (props) => {
  const { tabledata, removedata } = props;
  const row = tabledata.map((x, index) => {
    return (
      <tr key={index}>
        <td>{x.Name}</td>
        <td>{x.E_Mail}</td>
        <td>{x.Phone_Number}</td>
        <td>{x.Address}</td>
        <td>{x.Pincode}</td>
        <td>{x.Order_Item}</td>
        <td>
          <button onClick={() => removedata(index)}>Your Order Cancel</button>
        </td>
      </tr>
    );
  });
  return (
  <tbody>
    {row}
    </tbody>
    )
};
export default class Table extends Component {
  
  render() {
    const {tabledata,removedata}=this.props
    return <div className="mb-5">
        <table>
            <TableHeader/>
            <TableBody tabledata={tabledata}
            removedata={removedata} />
        </table>
    </div>;
  }
}
