import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Inventory from '../component/Inventory.js'
import LogoutButton from '../component/LogoutButton.js'


import {Button , Alert , Breadcrumb , Card , Container , Row , Col , Form , Badge} from 'react-bootstrap';


import "./../component/style.css"

import avatar from "../asset/logo-user.png"


function Profile() {

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
                {/* <div className="container userProfile">

                        <div className="row my-4  text-center" >
                            <div className="col-12">
                              <h1>Profile</h1>
                            </div>  
                        </div>
                        <div className="row text-center " > 
                            <div className="col-12">
                                <img src={avatar} class="rounded" alt="avatar" />
                            </div>  
                        </div>
                        <div className="row text-center" > 
                            <div className="col-12">
                              <h2 className="display-4">{localObj[0].name}</h2>
                            </div>
                        </div>
                        <div className="row text-center mb-5" > 
                            <div className="col-12">
                             <LogoutButton/>
                            </div>
                        </div>
                        
                        
                        <Inventory/>

                </div> */}

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
                           <Inventory/>
                        </Col>
                    </Row>

                    

                </Container>
                

                

            </>
                // Falsy condition return nothingss
                : <div></div>
            }



            
            
            

            



        </>
    )  
}

export default Profile
