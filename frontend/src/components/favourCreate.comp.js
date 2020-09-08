import React, { Component } from 'react';


export class FavourCreate extends Component {

    constructor(props) {
        super(props);
        this.state = { favourID: '' };
        this.state = { creditor: '' };
        this.state = { debtor: '' };
        this.state = { description: '' };
        this.state = { repaid: '' };
        this.state = { reward: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
    }

    handleSubmit(event) {
        fetch('/api/favours/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({ 
                favourID: this.state.favourID,
                creditor: this.state.creditor,
                debtor: this.state.debtor,
                description: this.state.description,
                repaid: this.state.repaid,
                reward: this.state.reward
            })
        });

        event.preventDefault();
    }

    render() {

        return (
            <div style={{ border: '3px solid green' }}>
                <h1>Create Favour</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        FavourID:
                        <input
                            type="text"
                            value={this.state.favourID}
                            onChange={this.handleChange('favourID')}
                        />
                    </label>
                    <br />
                    <label>
                        creditor:
                        <input
                            type="text"
                            value={this.state.creditor}
                            onChange={this.handleChange('creditor')}
                        />
                    </label>
                    <br />
                    <label>
                        debtor:
                        <input
                            type="text"
                            value={this.state.debtor}
                            onChange={this.handleChange('debtor')}
                        />
                    </label>
                    <br />
                    <label>
                        description:
                        <input
                            type="text"
                            value={this.state.description}
                            onChange={this.handleChange('description')}
                        />
                    </label>
                    <br />
                    <label>
                        repaid:
                        <input
                            type="text"
                            value={this.state.repaid}
                            onChange={this.handleChange('repaid')}
                        />
                    </label>
                    <br />
                    <label>
                        reward:
                        <input
                            type="text"
                            value={this.state.reward}
                            onChange={this.handleChange('reward')}
                        />
                    </label>
                    <br />
                    <input type="submit" value="Submit" onClick={() => {
                        console.log(this.state.favourID)
                    }} />
                </form>
            </div>
        )
    }
}

export default FavourCreate