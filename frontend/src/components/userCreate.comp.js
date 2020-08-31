import React, { Component } from 'react';


export class UserCreate extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '' };
        this.state = { password: '' };
        this.state = { admin: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
    }

    handleSubmit(event) {
        fetch('/api/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({ 
                username: this.state.username,
                password: this.state.password,
                admin: this.state.admin
            })
        });

        event.preventDefault();
    }

    render() {

        return (
            <div style={{ border: '3px solid green' }}>
                <h1>Create User</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange('username')}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="text"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                        />
                    </label>
                    <br />
                    <label>
                        Admin (true, false):
                        <input
                            type="text"
                            value={this.state.admin}
                            onChange={this.handleChange('admin')}
                        />
                    </label>
                    <br />
                    <input type="submit" value="Submit" onClick={() => {
                        console.log(this.state.username)
                    }} />
                </form>
            </div>
        )
    }
}

export default UserCreate