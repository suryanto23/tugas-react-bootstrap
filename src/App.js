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
     

      </div>

       
    </Router> 
  );
}

export default App;





