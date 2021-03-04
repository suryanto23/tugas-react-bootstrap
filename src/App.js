import React, { Component , useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import {Button , Alert , Breadcrumb , Card , Container , Row , Col , Form} from 'react-bootstrap';




import Navbar from './component/Navbar.js'
import Register from './pages/Register.js'
import Login from './pages/Login.js'
import Home from './pages/Home.js'
import Dashboard from './pages/Dashboard.js'
import Modal from './component/Modal.js';





function App() {

const [show, setShow] = useState(true);
  
  return (
   <Router>
      <div>

      <Navbar />
      <Modal/>
     
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register/>
          </Route> 
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
      </Switch>

      {/* <Container>

          <Row className="mb-5">
            <Col md>
              <Card >
                <Card.Img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                <Card.Body>
                  <Card.Title>Here is the Title</Card.Title>
                  <Card.Text>This is a text</Card.Text>
                  <Button variant="dark">Card Button</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card >
                <Card.Img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                <Card.Body>
                  <Card.Title>Here is the Title</Card.Title>
                  <Card.Text>This is a text</Card.Text>
                  <Button variant="dark">Card Button</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md >
              <Card >
                <Card.Img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                <Card.Body>
                  <Card.Title>Here is the Title</Card.Title>
                  <Card.Text>This is a text</Card.Text>
                  <Button variant="dark">Card Button</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        

          <Breadcrumb>
            <Breadcrumb.Item>This is a Breadcrumb</Breadcrumb.Item>
            <Breadcrumb.Item>This also</Breadcrumb.Item>
          </Breadcrumb>

          <Alert variant="dark" >This is Alert</Alert>
          <Button>Click Me</Button>

          <Row className="justify-content-center my-5">
            <Col xs="4" className="border border-dark">
              <Form className="p-3">
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email..."   />                
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="email" placeholder="Enter your password..."   />
                </Form.Group>
                <Button className="mt-3" variant="dark">Register</Button>
              </Form>
            </Col>
          </Row>
       
      </Container> */}

      </div>

       
    </Router> 
  );
}

export default App;





