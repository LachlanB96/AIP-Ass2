import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Input from './input.ui.comp'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { InputGroup, FormControl, Form } from 'react-bootstrap';


import { PersonCircle, KeyFill } from 'react-bootstrap-icons';



export class ApiTestSuite extends Component {

    constructor(props) {
        super(props);
        this.state = { userToDelete: '' };
        this.state.users = [];
        this.state.favours = [];
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    async componentDidMount() {
        await this.getUsers();
        await this.getFavours();
    }

    async getUsers() {
        let response = await fetch('/api/users');
        let { users } = await response.json();
        this.setState({ users });
        console.log("users: ");
        console.log(this.state.users);
    }

    async getFavours() {
        let response = await fetch('/api/favours');
        let { favours } = await response.json();
        this.setState({ favours });
        console.log(response);
    }
    
    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
    }
    
    handleSubmit = input => event => {
        if (input === 'userDelete'){
            fetch('/api/users/deleteID/' + this.state.userToDeleteID, {
                method: 'DELETE'
            });
        } else if (input === 'favourDelete') {
            fetch('/api/favours/deleteID/' + this.state.favourToDeleteID, {
                method: 'DELETE'
            });
        } else {
            console.log(input);
        }
        event.preventDefault();
        this.getUsers();
    }

    render () {
        console.log(this.state.users);
        console.log(this.state.favours);
        return (
            <div style={{border: '3px solid red'}}>
                <InputGroup className="mb-1">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            <PersonCircle />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Username" />
                </InputGroup>
                <InputGroup className="mb-1">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon2">
                            <KeyFill />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Password" />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Admin</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form>
                        <Form.Control as="select">
                            <option>False</option>
                            <option>True</option>
                        </Form.Control>
                    </Form>
                </InputGroup>
                <h1>API Test Suite</h1>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Grid item xs={12}>
                                <ul>
                                    
                                    {this.state.users.map((entry, i) => {
                                        return (
                                            <li>{i}. {entry.username} (_ID: {entry._id})</li>
                                        )
                                    })}
                                </ul>
                            </Grid>
                            <Grid xs={12}>
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
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid item xs={12}>
                                <ul>
                                    {this.state.favours.map((entry, i) => {
                                        return (
                                            <li>{i}. {entry.favourID} (_ID: {entry._id})</li>
                                        )
                                    })}
                                </ul>
                            </Grid>
                            <Grid item xs={12}>
                                <form onSubmit={this.handleSubmit('favourDelete')}>
                                    <label>
                                        Delete Favour:
                                        <input type="text"
                                            value={this.state.favourToDelete}
                                            onChange={this.handleChange('favourToDeleteID')}
                                        />
                                    </label>
                                    <input type="submit" value="Submit" />
                                </form>
                            </Grid>
                        </Grid>
                        <Grid>
                            <button onClick={() => {
                                console.log(this.state.users);
                                 }} type="button">
                                Console Log List
                            </button>
                        </Grid>
                    </Grid>
                </Container>
                <Input />
                <Input users={this.state.users} />

            </div>
        )
    }
}

export default ApiTestSuite