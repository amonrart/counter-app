import React, { Component } from "react";
import Counter from "./Counter";

class CounterList extends Component {
  state = {
    itemlist: [
      { id: 1, value: 0, itemname: "iPhone", price: 150 },
      { id: 2, value: 0, itemname: "iPad", price: 200 },
      { id: 3, value: 0, itemname: "iMac", price: 300 },
      { id: 4, value: 0, itemname: "iBook", price: 500 },
    ],
    total: 0, // เพิ่ม state total เพื่อเก็บราคารวม
  };

  // Calculate the total price of all items in the list
  calculateTotalPrice = () => {
    return this.state.itemlist.reduce(
      (total, item) => total + item.value * item.price,
      0
    );
  };

  // Render method for the CounterList component
  render() {
    return (
      
      <div className="container">
        
        <div className="row">
          <div className="col-md-9 text-right">
            <div className="d-inline mx-2">Total Price: {this.state.total} THB</div>
          </div>
          <div className="col-md-3 text-left">
            <button
              onClick={this.resetButton}
              className="btn-warning btn-sm "
            >
              Reset
            </button>
          </div>
        </div>
        <div className="row mt-4">
          {this.state.itemlist.map((item) => {
            return (
              <div className="col-md-3 text-center" key={item.id}>
                <Counter
                  item={item}
                  onIncrement={this.Increment}
                  onDecrement={this.Decrement}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Increment method for individual items
  Increment = (item) => {
    var _itemList = [...this.state.itemlist];
    const indexItem = _itemList.indexOf(item);
    _itemList[indexItem] = { ...item };
    _itemList[indexItem].value++;

    // คำนวณราคารวมใหม่
    const newTotal = _itemList.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.value * currentItem.price;
    }, 0);

    this.setState({ itemlist: _itemList, total: newTotal }); // อัพเดต state ราคารวม
  };

  Decrement = (item) => {
    var _itemList = [...this.state.itemlist];
    const indexItem = _itemList.indexOf(item);
    _itemList[indexItem] = { ...item };
    if (_itemList[indexItem].value > 0) {
      _itemList[indexItem].value--; // ลบเฉพาะถ้าค่าปัจจุบันมากกว่า 0
    }

    // คำนวณราคารวมใหม่
    const newTotal = _itemList.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.value * currentItem.price;
    }, 0);

    this.setState({ itemlist: _itemList, total: newTotal }); // อัพเดต state ราคารวม
  };

  // Reset button click handler to set all item values to 0
  resetButton = () => {
    var resetItem = this.state.itemlist.map((item) => {
      item.value = 0;
      return item;
    });

    // รีเซ็ตราคารวมเป็น 0
    this.setState({ itemlist: resetItem, total: 0 });
  };
}

export default CounterList;
