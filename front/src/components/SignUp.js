import React, { Component } from 'react';
import { TextField, Button, Snackbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            lastName: '',
            flash: '',
            open: false
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
            res  =>  this.setState({
                flash:  res.flash,
                open: true
            }),
            err  =>  this.setState({
                flash:  err.flash,
                open: true
            })
        )
        console.log("user submitted:", JSON.stringify(this.state));
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
          }
      
        this.setState({open: false});

    }

    render() {
        const { open } = this.state;
        return (
            <div>
                <Link to="/signin">Sign in</Link>
                <h1 className='title'>SIGN UP</h1>
                <form className='form' onSubmit={this.handleSubmit} style={{ marginRight: 8 }}>
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
                    <TextField
                        type='password'
                        name='password'
                        label="Password Copy"
                        placeholder='Confirm your password...'
                        fullWidth
                        onChange={this.updateEmailField}
                        />
                    <TextField
                        type='text'
                        name='name'
                        label="Name"
                        placeholder='Enter your first name...'
                        fullWidth
                        onChange={this.updateEmailField}
                        />
                    <TextField
                        type='text'
                        name='lastName'
                        label="Last Name"
                        placeholder='Enter your last name...'
                        fullWidth
                        onChange={this.updateEmailField}
                        />
                    <Link to="/">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Link>
                </form>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    message={<p>{this.state.flash}</p>}
                />
            </div>
        );
    }
}

export default SignUp;