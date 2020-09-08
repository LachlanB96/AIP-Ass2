//Theme help from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/dashboard/Dashboard.js

import React from 'react';
import './App.css';
import ApiTestSuite from './components/apiTestSuite.comp';
import UserCreate from './components/userCreate.comp';
import UserGet from './components/userGet.comp';
import FavourCreate from './components/favourCreate.comp';
import FavourGet from './components/favourGet.comp';

import AppBar from '@material-ui/core/AppBar';


import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';


class App extends React.Component {

    render () {
        return (
            <React.Fragment>
                <div>
                <AppBar>
                    <Toolbar>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap >
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <br />
                <br />
                <br />
                <br />
                <br />
                </div>
                <main>
                    <div />
                    <Container maxWidth="lg">
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper >
                                    <UserCreate />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper >
                                    <UserGet />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6} lg={9}>
                                <Paper >
                                    <FavourCreate />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6} lg={1}>
                                <Paper >
                                    <FavourGet />
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper >
                                    <ApiTestSuite />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </main>
            </React.Fragment>
        )
    }
}

export default App