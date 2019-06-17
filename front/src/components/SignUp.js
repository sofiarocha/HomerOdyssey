import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'new email'
        }
    }

    updateEmailField = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    render() {
        const { email } = this.state;
        return (
            <div>
                <h1>{email}</h1>
                <input
                    type='email'
                    name='email'
                    placeholder='Enter your email...'
                    onChange={this.updateEmailField}
                />
            </div>
        );
    }
}

export default SignUp;