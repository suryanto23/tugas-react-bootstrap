import React, { useEffect , useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Inventory from '../component/Inventory.js'
import LogoutButton from '../component/LogoutButton.js'
import {Modal} from 'react-bootstrap'



import {Button , Alert , Breadcrumb , Card , Container , Row , Col , Form , Badge} from 'react-bootstrap';


import "./../component/style.css"

import avatar from "../asset/logo-user.png"


function Profile() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [idBarang, setIdBarang] = useState("");
    const [namaBarang, setNamaBarang] = useState("");
    const [val, setVal] = useState("");
    let local = localStorage.getItem("user")
    let localObj = JSON.parse(local)
    const history = useHistory();
    
    // Tail function for preventing unlogged user
    useEffect(() => {


        if (!localStorage.user) {
            
            console.log(local)
            alert ("cannot accsess this page")
             history.push("/")
        }
        
      });

      function track  (param) {
        setVal(param.target.value)
    }

    function print  (param) {
     
       axios.put(`https://6023a8436bf3e6001766b514.mockapi.io/login-app/${localObj[0].id}/barang/${idBarang}` , {produk : val})
       .then(result => console.log(result.data))
       setShow(false)

    }

      

     function logout  ()  {
       
        let n = window.confirm("Logging Out, Are you sure?")
        if (n){ 
            localStorage.clear("user")
            history.push("/")
         } else return

        
      }




    return (
        <>


            { localStorage.user ? 
            <>
                <Container>
                    <Row className="text-center"> 
                        <Col>
                            <h1>User Profile</h1>
                        </Col>
                    </Row>

                    <Row className="text-center">
                        <Col>
                            <img src={avatar} alt="avatar" style={{width:"150px"}}/>
                        </Col>
                    </Row>

                    <Row className="text-center">
                        <Col>
                            <h1>{localObj[0].name}</h1>
                        </Col>
                    </Row>

                    <Row className="text-center">
                        <Col>
                            <LogoutButton/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                           <Inventory setShow={setShow} setIdBarang={setIdBarang} setNamaBarang={setNamaBarang}/>
                        </Col>
                    </Row>

                    <Modal show={show} onHide={handleClose}>
                        
                            <Modal.Body>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Edit Data</Form.Label>
                                        <Form.Control defaultValue={namaBarang} onChange={track} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={print}>
                                    Save
                                </Button>
                            </Modal.Footer>
                    </Modal>

                    

                </Container>
                

                

            </>
                // Falsy condition return nothingss
                : <div></div>
            }


        </>
    )  
}

export default Profile
