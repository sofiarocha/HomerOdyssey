import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            lastName: '',
            flash: ''
        }
    }

    updateEmailField = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch("/auth/signup",
        {
            method:  'POST',
            headers:  new Headers({
                    'Content-Type':  'application/json'
            }),
            body:  JSON.stringify(this.state),
        })
        .then(res  =>  res.json())
        .then(
            res  =>  this.setState({flash:  res.flash}),
            err  =>  this.setState({flash:  err.flash})
        )
        console.log("user submitted:", JSON.stringify(this.state));
    }

    render() {
        return (
            <div>
                <p>{this.state.flash}</p>
                <h1 className='title'>SIGN UP</h1>
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
                        name='name'
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