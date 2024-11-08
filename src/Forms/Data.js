
import React, { Component } from "react";
import Form from "./Form";
import Table from "./Table";

export default class Data extends Component {
  state = {
    data: [],
  };
  removedata = (index) => {
    const { data } = this.state;
    let filterdata = data.filter((x, i) => {
      return i !== index;
    });
    this.setState({ data: filterdata });
  };
  handlesubmit = (newdata) => {
    this.setState({
      data: [...this.state.data, newdata],
    });
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <Form handlesubmit={this.handlesubmit} />
        <Table tabledata={data} removedata ={this.removedata} />
      </div>
    );
  }
}
