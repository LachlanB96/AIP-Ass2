import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Input from './input.ui.comp'


export class ApiTestSuite extends Component {

    constructor(props) {
        super(props);
        this.state = { userToDelete: '' };
        this.state = { users: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    async componentDidMount() {
        this.getUsers();
    }

    async getUsers() {
        let response = await fetch('/api/users');
        let { users } = await response.json();
        this.setState({ users });
    }
    
    // async listAdd(item) {
    //     await fetch('/list/add', { 
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json;charset=utf-8'},
    //         body: JSON.stringify({ grocery: item })});
    //     this.getList();
    // }
    
    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
    }
    
    handleSubmit = input => event => {
        if (input === 'userDelete'){
            console.log(this.state.userToDeleteID);
            fetch('/api/users/deleteID/' + this.state.userToDeleteID, {
                method: 'DELETE'
            });
        } else {
            console.log(input);
        }
        event.preventDefault();
        this.getUsers();
    }

    render () {

        return (
            <div style={{border: '3px solid red'}}>
                <h1>API Test Suite</h1>
                <ul>
                    {this.state.users.map((entry, i) => {
                        return (
                            <li>{i}. {entry.username} (_ID: {entry._id})</li>
                        )
                    })}
                </ul>
                <Input />
                <form onSubmit={this.handleSubmit('userDelete')}>
                    <label>
                        Delete User:
                        <input type="text" 
                            value={this.state.userToDelete} 
                            onChange={this.handleChange('userToDeleteID')}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <a href="/ui">Go to UI</a>
                {/* <button onClick={  () => {
                    this.listAdd('Dairy');
                }} type="button">
                    Dairy!
                </button> */}
                <button onClick={ () => {
                    console.log(this.state.users);
                }} type="button">
                    Console Log List
                </button>
            </div>
        )
    }
}

export default ApiTestSuite