import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    }

    updateEmailField = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state));
    }

    render() {
        return (
            <div>
                <h1 className='title'>{JSON.stringify(this.state)}</h1>
                <form className='form' onSubmit={this.handleSubmit}>
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        onChange={this.updateEmailField}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                        onChange={this.updateEmailField}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Confirm your password...'
                        onChange={this.updateEmailField}
                    />
                    <input
                        type='text'
                        name='firstName'
                        placeholder='Enter your first name...'
                        onChange={this.updateEmailField}
                    />
                    <input
                        type='text'
                        name='lastName'
                        placeholder='Enter your last name...'
                        onChange={this.updateEmailField}
                    />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default SignUp;