import React, { Component } from 'react';


export class UserGet extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '' };
        this.state = { user: {
            username: '',
            password: '',
            admin: ''
        }};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
    }

    handleSubmit(event) {
        this.getUser();
        event.preventDefault();
    }

    async getUser(){
        let response = await fetch('/api/users/' + this.state.username);
        let user = await response.json();
        console.log(user);
        if(user === null){
            user = {
                username: '',
                password: '#ERROR',
                admin: '#ERROR'   
            }
        }
        this.setState({ user });
    }


    render() {

        return (
            <div style={{ border: '3px solid green' }}>
                <h1>Get User by name</h1>
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
                            value={this.state.user.password}
                            disabled
                        />
                    </label>
                    <br />
                    <label>
                        Admin:
                        <input
                            type="text"
                            value={this.state.user.admin}
                            disabled
                        />
                    </label>
                    <br />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default UserGet