//Theme help from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/dashboard/Dashboard.js

import React from 'react';
import './App.css';
import { Form } from './components/form.comp'
import ApiTestSuite from './components/apiTestSuite.comp';
import AppBar from '@material-ui/core/AppBar';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';


class App extends React.Component {

    constructor(props) {
        super(props);
        
    }

    render () {
        return (
            <React.Fragment>
                <div>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            // onClick={handleDrawerOpen}
                        >
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
                <Drawer
                >
                    <div>
                        <IconButton>
                            <NotificationsIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>a</List>
                    <Divider />
                    <List>{['Mark', 'fffff']}</List>
                </Drawer>
                <main>
                    <div />
                    <Container maxWidth="lg">
                        <Grid container spacing={3}>
                            {/* Chart */}
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper >
                                    <ApiTestSuite />
                                </Paper>
                            </Grid>
                            {/* Recent Deposits */}
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper >
                                    <Form />
                                </Paper>
                            </Grid>
                            {/* Recent Orders */}
                            <Grid item xs={12}>
                                <Paper >
                                    <ApiTestSuite />
                                </Paper>
                            </Grid>
                        </Grid>
                        <Box pt={4}>
                            <p>hi</p>
                        </Box>
                    </Container>
                </main>
            </React.Fragment>
        )
    }
}

export default App