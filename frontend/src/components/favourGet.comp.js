import React, { Component } from 'react';


export class FavourGet extends Component {

    constructor(props) {
        super(props);
        this.state = { favour: '' };
        this.state = { favour: {
            favourID: '',
            creditor: '',
            debtor: '',
            description: '',
            repaid: '',
            reward: ''
        }};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
    }

    handleSubmit(event) {
        this.getFavour();
        event.preventDefault();
    }

    async getFavour(){
        let response = await fetch('/api/favours/' + this.state.favourID);
        let favour = await response.json();
        console.log(favour);
        if(favour === null){
            favour = {
                favour: '',
                password: '#ERROR',
                admin: '#ERROR'   
            }
        }
        this.setState({ favour });
    }


    render() {

        return (
            <div style={{ border: '3px solid green' }}>
                <h1>Get Favour by name</h1>
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
                            value={this.state.favour.creditor}
                            disabled
                        />
                    </label>
                    <br />
                    <label>
                        debtor:
                        <input
                            type="text"
                            value={this.state.favour.debtor}
                            disabled
                        />
                    </label>
                    <br />
                    <label>
                        description:
                        <input
                            type="text"
                            value={this.state.favour.description}
                            disabled
                        />
                    </label>
                    <br />
                    <label>
                        repaid:
                        <input
                            type="text"
                            value={this.state.favour.repaid}
                            disabled
                        />
                    </label>
                    <br />
                    <label>
                        reward:
                        <input
                            type="text"
                            value={this.state.favour.reward}
                            disabled
                        />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default FavourGet