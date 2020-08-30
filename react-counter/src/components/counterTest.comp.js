import React, { Component } from 'react';

export class CounterTest extends Component {

    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    
    async componentDidMount() {
        let response = await fetch('/api/count');
        let message = await response.json();
        let count = message.count;
        this.setState({ count });
    
        response = await fetch('/list');
        //console.log(response.json());
        let { shoppingList } = await response.json();
        this.setState({ shoppingList });
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
                <p>Current Count: {this.state.count}</p>
                <button onClick={() => {this.increment(1) }} type="button">+1</button>
                <button onClick={() => {this.increment(2) }} type="button">+2</button>
            </div>
        )
    }
}

export default CounterTest