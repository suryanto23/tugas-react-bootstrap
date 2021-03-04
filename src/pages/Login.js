import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import {Button , Alert , Breadcrumb , Card , Container , Row , Col , Form} from 'react-bootstrap';
import styled from 'styled-components'


function Login() {

    const history = useHistory();
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    useEffect (() => { 

        if (localStorage.user){

            alert ("You Already Logged In")
            history.push("/dashboard")

        }

     })

     const Title = styled.h1 `
     font-weight : lighter;
     text-align: center;
     `
    
    let dataObj = {
        email: email,
        password:  password,
    }

    function getEmail (param) {
        setEmail (param.target.value)
    }

    function getPassword (param) {
        setPassword (param.target.value)
    }

    function getData (){

        axios.get("https://6023a8436bf3e6001766b514.mockapi.io/login-app")

            .then(result => {

                // Validasi User
                const user = result.data.filter( (user) => user.email === dataObj.email && user.password === dataObj.password );
                let userJSON = JSON.stringify(user)

                if ( user.length > 0 ){
                        alert ("Login Berhasil")
                        localStorage.user = userJSON
                        history.push("/")           
                    } else {
                        alert ("Login Gagal")
                    }
    
        } )

    }


    return (
        <>
        { !localStorage.user ? 
    
            <Container>

                <Row className="justify-content-center ">
                    <Col xs lg="4" className="">
                        <Row className="my-5 text-center">
                            <Col><Title>Login</Title></Col>
                        </Row>
                        <Row>
                            <Col  className="border p-3">
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control type="email" onChange={getEmail} />
                                        <Form.Label>Your Password</Form.Label>
                                        <Form.Control onChange={getPassword}  type="password"/>
                                    </Form.Group>
                                        <Row>
                                        <Col>
                                            <Button variant="dark" className="w-100" onClick={getData} >Sign In</Button>
                                        </Col>
                                        </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
           
            : <div> </div>
        }    

        </>
        
    )
    
}

export default Login
