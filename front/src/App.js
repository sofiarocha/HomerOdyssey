import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

let theme = createMuiTheme();
function App() {
  return (
    <MuiThemeProvider theme={theme} >
      <Grid  container
      alignItems='center'
      style={{ height:  '100%' }}>
        <Grid  item  xs={12}>
          <Paper
          elevation={4}
          style={{ margin:  32 }}
          >
            <Grid  container
            alignItems='center'
            justify='center'>
              <Grid  item  sm={6} xs={12}
              style={{ textAlign: 'center' }}>
                <img 
                  src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"
                  alt="homer"
                />
              </Grid>
              <Grid  item sm={6} xs={12}
              alignContent='center'
              >
                  <BrowserRouter>
                    <Switch>
                      <Route exact path="/" component={SignIn}/>
                      <Route path="/signup" component={SignUp}/>
                      <Route path="/signin" component={SignIn}/>
                      <Route path="/profile" component={Profile}/>
                    </Switch>
                  </BrowserRouter>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
