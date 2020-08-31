import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


export class ApiTestSuite extends Component {

    constructor(props) {
        super(props);
        this.state = {itemToAdd: ''};
        this.state = {shoppingList: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    async componentDidMount() {
        this.getList();
    }

    async getList() {
        let response = await fetch('/list');
        let { shoppingList } = await response.json();
        this.setState({ shoppingList });
    }
    
    async listAdd(item) {
        await fetch('/list/add', { 
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({ grocery: item })});
        this.getList();
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
            <div style={{border: '3px solid red'}}>
                <h1>API Test Suite</h1>
                <ul>
                    {this.state.shoppingList.map((entry, i) => {
                        return (
                            <p>{i}. {entry.item}</p>
                        )
                    })}
                </ul>
                <p>List: {JSON.stringify(this.state.shoppingList)}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Item:
                        <input type="text" value={this.state.itemToAdd} onChange={(event) => {
                        this.handleChange(event);
                        }} />
                    </label>
                    <input type="submit" value="Submit" onClick={() => {
                    }} />
                </form>
                <a href="/ui">Go to UI</a>
                <button onClick={  () => {
                    this.listAdd('Dairy');
                }} type="button">
                    Dairy!
                </button>
                <button onClick={ () => {
                    console.log(this.state.shoppingList);
                }} type="button">
                    Console Log List
                </button>
            </div>
        )
    }
}

export default ApiTestSuite