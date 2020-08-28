import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  async componentDidMount() {
    let response = await fetch('/api/count');
    let { count } = await response.json();
    this.setState({ count });
  }

  async increment(incrementAmount) {
    console.log(incrementAmount);
    let response = await fetch('/api/increment', { 
      method: 'POST',
      headers: {'Content-Type': 'application/json;charset=utf-8'},
      body: JSON.stringify({ increment: incrementAmount })});
    let { count } = await response.json();
    this.setState({ count });
  }

  render () {
    return (
      <div>
        <h1>Counter</h1>
        <p>Current Count: {this.state.count}</p>
        <button onClick={() => {this.increment(1) }} type="button">+1</button>
        <button onClick={() => {this.increment(2) }} type="button">+2</button>
      </div>
    )
  }
}

export default App;
