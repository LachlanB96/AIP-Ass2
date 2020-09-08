//Theme help from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/dashboard/Dashboard.js

import React from 'react';
import './App.css';
import ApiTestSuite from './components/apiTestSuite.comp';
import UserCreate from './components/userCreate.comp';
import UserGet from './components/userGet.comp';
import FavourCreate from './components/favourCreate.comp';
import FavourGet from './components/favourGet.comp';

import Navbar from 'react-bootstrap/Navbar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component {

    render () {
        return (
            <React.Fragment>
                <div>
                    <Navbar bg="dark" fg="light">
                        <Navbar.Brand href="#home">AIP Ass2 LB v0.2</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Users</Nav.Link>
                                <Nav.Link href="#link">Favours</Nav.Link>
                                <Nav.Link href="#link">Leaderboards</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Account Settings</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">App Information</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Admin Control Panel</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <UserCreate />
                        </Col>
                        <Col>
                            <UserGet />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FavourCreate />
                        </Col>
                        <Col>
                            <FavourGet />
                        </Col>
                    </Row>
                    <Row>
                        <ApiTestSuite />
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default App