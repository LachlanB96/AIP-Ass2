import React from 'react';
import './App.css';

import { Form } from './components/form.comp'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.state = {itemToAdd: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    let response = await fetch('/api/count');
    let message = await response.json();
    let count = message.count;
    console.log(message);
    this.setState({ count });

    response = await fetch('/list');
    //console.log(response.json());
    let { shoppingList } = await response.json();
    this.setState({ shoppingList });
    console.log(this.state.shoppingList);

    // let response = await fetch('/list/add', { 
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json;charset=utf-8'},
    //   body: JSON.stringify({ grocery: incrementAmount })});
    // let { count } = await response.json();
    // this.setState({ count });
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

  async listAdd(item) {
    console.log("0");
    let response = await fetch('/list/add', { 
      method: 'POST',
      headers: {'Content-Type': 'application/json;charset=utf-8'},
      body: JSON.stringify({ grocery: item })});
    //let { shoppingList } = await response.json();
    let message = await response.json();
    console.log(message);
    let shoppingList = message.shoppingList;
    console.log("1");
    console.log(shoppingList);
    this.setState({ shoppingList });
  }

  handleChange(event){
    console.log(event.target.value);
    this.setState({itemToAdd: event.target.value});
  }

  handleSubmit(event) {
    this.listAdd(this.state.itemToAdd);
    this.setState({itemToAdd: ''});
    event.preventDefault();
  }

  render () {
    return (
      <div>
        <h1>Counter</h1>
        <p>Current Count: {this.state.count}</p>
        <button onClick={() => {this.increment(1) }} type="button">+1</button>
        <button onClick={() => {this.increment(2) }} type="button">+2</button>
        <div></div>
        <p>List: {JSON.stringify(this.state.shoppingList)}</p>
        <Form />
        <form onSubmit={this.handleSubmit}>
          <label>
            Item:
            <input type="text" value={this.state.itemToAdd} onChange={(event) => {
              //console.log(this.state.itemToAdd);
              this.handleChange(event);
            }} />
          </label>
          <input type="submit" value="Submit" onClick={() => {
            console.log(this.state.itemToAdd)
          }} />
        </form>
        <a href="/ui">Go to UI</a>
        <button onClick={  () => {
          this.listAdd('Dairy') ;
          console.log(this.state.shoppingList);
        }} type="button">Dairy!</button>
        <button onClick={ () => {
          console.log(this.state.shoppingList);
        }} type="button">Console Log List</button>
      </div>
    )
  }
}

export default App;
