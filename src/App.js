import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { HomePage } from './pages/HomePage';
import { Interests } from './pages/Interests';
import { Grad } from './pages/Grad';
import {Nav, Navbar} from 'react-bootstrap'
import './App.css';

const Main = () => (
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/interests" component={Interests} />
            <Route path="/grad" component={Grad} />
          </Switch>
        </div>        
)

const Header = () => (
        <div className="container">
          <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
          <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" variant="dark">
              <LinkContainer to="/grad">
                <Nav.Link>Academic Work</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/interests">
                <Nav.Link>Hobbies</Nav.Link>
             </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
        </div>    
)

export default function App() {
    return (
            <div>
              <Header />
              <Main />
            </div>
    )
}
