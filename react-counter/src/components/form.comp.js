import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';


export class Form extends Component {

    continue = e => {
        e.preventDefault();
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
    }

    render () {
        return (
            <div>
                <InputLabel
                 FormLabelClasses={{ asterisk: 'bar' }}
                  classes={{ asterisk: 'bar' }}
                >
                    Foo
                </InputLabel>
                <TextField 
                    hintText="Enter your username"
                    floatingLabelText="Username"
                />
                <br />
                <TextField 
                    hintText="Enter your password"
                    floatingLabelText="Password"
                />
            </div>
        )
    }

}

export default Form

