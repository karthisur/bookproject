import React, { Component } from 'react'
import "./Form.css";

export default class Form extends Component {
    initialState = {
        Name: " ",
        E_mail: " ",
        Phone_Number: " ",
        Address: " ",
        pin_code: " ",
        Order_Item: " ",
    }
    state = this.initialState
    handledata = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        const { name, value } = event.target;
        this.setState({ [name]: [value] });
    }

    submitform = () => {
        console.log(" Your Order Is submitted");
        console.log(this.state);
        let newdata = this.state
        this.props.handlesubmit(newdata)
        this.setState(this.initialState)
    }
    render() {
        return (
            <div>
                <div className='body mt-5 mb-5'>
                    <div className='containerr'>
                        <form>
                            <h2 className='tittle'>Pless Fill The Form</h2>
                            <div className='main-user-info'>
                                <div className='user-input-box'>
                                    <label>Name</label>
                                    <input type='text' name='Name' id='name'
                                        onChange={this.handledata}
                                        value={this.state.Name}
                                        required
                                    />

                                </div>
                                <div className='user-input-box'>
                                    <label>E_Mail</label>
                                    <input type='mail' name='E_Mail' id='E_Mail'
                                        onChange={this.handledata}
                                        value={this.state.Email}
                                        required
                                    />
                                </div>

                                <div className='user-input-box'>
                                    <label>Phone_Number</label>
                                    <input type='number' name='Phone_Number' id='phone_number'
                                        onChange={this.handledata}
                                        value={this.state.Phone_Number}
                                        required
                                    />
                                </div>
                                <div className='user-input-box'>
                                    <label>Address</label>
                                    <input type='text' name='Address' id='address'
                                        onChange={this.handledata}
                                        value={this.state.Address}
                                        required
                                    />
                                </div>
                                <div className='user-input-box'>
                                    <label>Pincode</label>
                                    <input type='number' name='Pincode' id='Pincode'
                                        onChange={this.handledata}
                                        value={this.state.pincode}
                                        required
                                         />
                                </div>
                                <div className='user-input-box'>
                                    <label>Order_Item</label>
                                    <select id='order_item' className='select-tittle'>
                                        <option value={this.state.Order_Item}>Order Item</option>
                                        <option value={this.state.Order_Item}>Comic Books</option>
                                        <option value={this.state.Order_Item}>GHOST BOOK</option>
                                        <option value={this.state.Order_Item}>THE TIME MACHINE</option>
                                        <option value={this.state.Order_Item}>GRUFFALO'S BOOK</option>
                                        <option value={this.state.Order_Item }>LOST WORLD</option>
                                        onChange={this.handledata}
                                        value={this.state.Order_Item}
                                        
                                    </select>
                                   
                                </div>

                                <div className='submit-btn'>
                                    <input type='button' value='submit'
                                        onClick={this.submitform} />
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
