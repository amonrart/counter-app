import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      
      <div className="counter">
        <p>{this.props.item.itemname}</p>
        <p>ราคา : {this.props.item.price} THB</p>
        <p>จำนวน : {this.props.item.value}</p>
        <button onClick={() => this.props.onIncrement(this.props.item)} className="btn btn-primary" >+</button>
        <button onClick={() => this.props.onDecrement(this.props.item)} className="btn btn-secondary" >-</button>
      </div>
    );
  }
}

export default Counter;
