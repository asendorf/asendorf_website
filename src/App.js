import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Interests } from './pages/Interests';
import { Grad } from './pages/Grad';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

const Main = () => (
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/interests" component={Interests} />
            <Route exact path="/grad" component={Grad} />
          </Switch>
        </div>        
)

const Header = () => (
        <div className="container">
          <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
          <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href={process.env.PUBLIC_URL + "/grad"}>Grad Work</Nav.Link>
              <Nav.Link href={process.env.PUBLIC_URL + "/interests"}>Interests</Nav.Link>
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
