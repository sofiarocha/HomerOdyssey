import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    updateEmailField = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch("/auth/signin",
        {
            method:  'POST',
            headers:  new Headers({
                    'Content-Type':  'application/json'
            }),
            body:  JSON.stringify(this.state),
        })
        .then(res  =>  res.json());
        // this.props.history.push('/profile');
    }

    render() {
        return (
            <div>
                <Link to="/signup">Sign up</Link>
                <h1 className='title'>SIGN IN</h1>
                <form
                    className='form'
                    onSubmit={this.handleSubmit}
                    style={{ marginRight: 8 }}
                >
                    <TextField
                        type='email'
                        name='email'
                        label='Email'
                        placeholder='Enter your email...'
                        margin="normal"
                        fullWidth
                        onChange={this.updateEmailField}
                        />
                    <TextField
                        type='password'
                        name='password'
                        label='Password'
                        placeholder='Enter your password...'
                        fullWidth
                        onChange={this.updateEmailField}
                        />

                    <Link to="/profile"><Button variant="contained" color="primary" type="submit">Submit</Button></Link>
                </form>
            </div>
        );
    }
}

export default SignIn;