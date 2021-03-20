import React from "react";
import classes from "./Counter.module.css";
import { connect } from "react-redux";
import actions from "../redux/counter/actions";

const Counter = ({ count, decrement, increment, step, handleClick }) => {
  return (
    <>
      <h2>Это Counter</h2>
      <div className={classes.counterWrapper}>
        <button className={classes.decrement} onClick={() => {decrement(step)}} name="decrement">
          -
        </button>
        <p>{count}</p>
        <button className={classes.increment} onClick={handleClick} name="increment">
          +
        </button>
      </div>
    </>
  );
};

// class Counter extends Component {
//   state = {
//     count: this.props.count,
//     step: this.props.step,
//     min: this.props.min,
//     max: this.props.max,
//   };
//   handleDecrement = () => {
//     console.log("Click decrement");
//     const { min, count, step } = this.state;
//     if (count > min) {
//       this.setState((prevState) => {
//         return {
//           count: prevState.count - step,
//         };
//       });
//     }
//   };

//   handleIncrement = () => {
//     console.log("Click increment");
//     const { max, count, step } = this.state;
//     if (count < max) {
//       this.setState((prevState) => {
//         return {
//           count: prevState.count + step,
//         };
//       });
//     }
//   };
//   render() {
//     return (
//       <>
//         <h2>Это Counter</h2>
//         <div className={classes.counterWrapper}>
//           <button className={classes.decrement} onClick={this.handleDecrement}>
//             -
//           </button>
//           <p>{this.state.count}</p>
//           <button className={classes.increment} onClick={this.handleIncrement}>
//             +
//           </button>
//         </div>
//       </>
//     );
//   }
// }

const mapStateToProps = (state) => {
  return {
    count: state.counter.value,
  };
};
// const mapDispatchToProps = (dispatch) => {
// return {
//   increment: () => {
//     return dispatch(actions.increment(1))
//   },
//   decrement: () => {
//     return dispatch(actions.decrement(1))
//   }
// }
// };

const mapDispatchToProps = {
  increment: actions.increment,
  decrement: actions.decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);