import { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  counterPlus = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  counterMinus = () => {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  };

  render() {
    const { counter } = this.state;
    return (
      
        <div className="counter-container" >
             
        <h2>Counter: {counter}</h2>
        <div>
        <button className="plus" onClick={this.counterPlus}>+</button>
        <button className="minus" onClick={this.counterMinus}>-</button>
        </div>
        </div>
        

    
    );
  }
}

export default Counter;
