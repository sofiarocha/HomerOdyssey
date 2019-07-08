import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                email:  "homer.simpson@wildcodeschool.fr",
                name:  "Homer",
                lastname:  "Simpson"
            }
        }
    }

    render() {
        const { email, name, lastname } = this.state.profile;
        return (
            <div>
                <List>
                    <ListItem>
                        <ListItemText primary="email" secondary={email}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="name" secondary={name}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="lastname" secondary={lastname}/>
                    </ListItem>
                </List>
                <Link to="/signin">
                    <Button>Sign out</Button>
                </Link>
            </div>
        );
    }
}

export default Profile;