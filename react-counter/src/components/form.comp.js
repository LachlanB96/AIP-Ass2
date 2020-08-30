import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import App from '../App';

export class Form extends Component {

    continue = e => {
        e.preventDefault();
    }

    render () {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Details" />
                    <TextField 
                        hintText="Enter your username"
                        floatingLabelText="Username"
                    />
                    Hello World
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Form