
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components'

import {Button , Alert , Breadcrumb , Card , Container , Row , Col , Form} from 'react-bootstrap';

const Title = styled.h1 `
font-weight : lighter;
text-align: center;
`

const Global = styled.div `

    & .style {
        border :1px solid rgb(215, 215, 215);;
        padding : 20px;
        
    }
    `


function Register() {


   

    

    

    const [nama, setNama] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const history = useHistory();

    let dataObj = {
        name:  nama,
        email: email,
        password: password,
    }

    function storeNama (param){
        setNama (param.target.value)
    }

    function storeEmail (param){
        setEmail (param.target.value)
        
    }

    function storePassword (param){
        setPassword (param.target.value)
    }


    function sendData (){

        axios.post("https://6023a8436bf3e6001766b514.mockapi.io/login-app", dataObj )
        .then(result => {  
            console.log("POST executed sucssesfully : " , result.data)
            alert ("Registrasi Berhasil, Silahkan Login")
            history.push("/Login") 
        } )

     }

return(

    <Container>
    <Global>

        <Row className="justify-content-center">
            <Col xs lg="4">
                <Row className="my-5">
                    <Col><Title >Create an Account</Title></Col>
                </Row>
                <Row>
                    <Col  className="style">
                        <Form>
                            <Form.Group>
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control onChange={storeNama} />
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" onChange={storeEmail} />
                                <Form.Label >Your Password</Form.Label>
                                <Form.Control type="password" onChange={storePassword} />
                            </Form.Group>
                                <Row>
                                <Col>
                                    <Button variant="dark" className="w-100" onClick={sendData} >Register</Button>
                                </Col>
                                </Row>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Global>
    </Container>
    )
}

export default Register
