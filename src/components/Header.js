import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contacts from './pages/Contacts'

import logo from '../assets/logo.png'

export default function Header() {
   return (
      <React.Fragment>
         <Router>

            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
               <Container>
                  <Navbar.Brand href="/">
                     <img src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-center" alt="Logo" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="mr-auto">
                        <Nav.Link><Link className="header-link" to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link className="header-link" to="/about">About</Link></Nav.Link>
                        <Nav.Link><Link className="header-link" to="/blog">Blog</Link></Nav.Link>
                        <Nav.Link><Link className="header-link" to="/contacts">Contacts</Link></Nav.Link>
                     </Nav>
                     <Form inline>
                        <Form.Control type="text"
                           placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                     </Form>
                  </Navbar.Collapse>
               </Container>
            </Navbar>

            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/about" component={About} />
               <Route exact path="/blog" component={Blog} />
               <Route exact path="/contacts" component={Contacts} />
            </Switch>

         </Router>
      </React.Fragment>
   )
}