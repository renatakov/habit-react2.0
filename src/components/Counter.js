import React, { Component } from "react";

import classes from "./Counter.module.css";

class Counter extends Component {
  state = {
    count: this.props.count,
    step: this.props.step,
    min: this.props.min,
    max: this.props.max,
  };
  handleDecrement = () => {
    console.log("Click decrement");
    const {min, count,step} = this.state
    if(count > min) {
      this.setState((prevState) => {
        return{
          count: prevState.count - step
        }
      })
    }
  };

  handleIncrement = () => {
    console.log("Click increment");
    const {max, count,step} = this.state
    if(count < max) {
      this.setState((prevState)=>{
        return{
          count: prevState.count + step
        }
      })
    }
  };
  render() {
    return (
      <>
        <h2>Это Counter</h2>
        <div className={classes.counterWrapper}>
          <button className={classes.decrement} onClick={this.handleDecrement}>
            -
          </button>
          <p>{this.state.count}</p>
          <button className={classes.increment} onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
