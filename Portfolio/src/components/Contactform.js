import React, {useState } from 'react';
import "../App.css";
import "../service.css";
import { Row, Col, Container } from 'react-bootstrap';
import Axios from 'axios';
import Alert from '../components/Material/Alert';
import AlertErr from '../components/Material/alerterr';


function Contactform() {

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [submsg, setsubmsg] = useState("");
  const [msg, setmsg] = useState("");
  const [alert ,setalert] = useState("");


function change(e){
  setfname(e.target.value);

 }

function change2(e){
 setlname(e.target.value);
}

function change3(e){
 setemail(e.target.value);
}
function change4(e){
 setsubmsg(e.target.value);
}
function change5(e){
 setmsg(e.target.value);
}

  function handlesubmit(e){
 
      
    e.preventDefault();

    Axios.post('http://localhost/React_portfolio/backend.php',{
      data:  {
        fname:fname,
        lname:lname,
        email:email,
        msg_obj:submsg,
        message:msg
            },
    
      header:{
        'Content-type':'multipart/form-data',
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
      },

    }).then(response => {
      setalert("Success");
      console.log(response);
      })
    
   
      .catch(function (error) {
        setalert("Error");
        console.log(error)});

          setfname("");
          setlname("");
          setemail("");
          setsubmsg("");
          setmsg("");
          setalert("");
  }


    return(
      <>
      <div style={{backgroundColor : "white",  height:"100ch"}}>

      <div  id = "contacth2">
          <h2>Contact Me</h2>
      </div>
  
        <div>
        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
          a matter of hours to help you.</p>
        </div>
  
  <form method='post' > 
  <Container>
    <Row>
         
            <Col md={6}> 
            <input type="text" name = "fname" value={fname} onChange={change} 
             placeholder="First Name" id="text1" required />
            </Col>
          
  
            <Col md={6}>
            <input type="text" name = "lname" value={lname} onChange={change2}
            placeholder='Last Name' id="text1" />
            </Col>
    </Row>
  
    </Container>
  
    <input type="text" name = "email" value={email} onChange={change3}
    placeholder='Email address' id="text2" />
    
    <input type="text" name = "submsg" value={submsg} onChange={change4}
    placeholder='Subject of the message' id="text2" />
  
    <textarea type="textarea" rows={10} value={msg} name = "msg" onChange={change5}
    placeholder='Type your message here..' id="text3" />
  
    <button type="submit" id="Submitbtn" onClick={handlesubmit}
    value="submit"className="btn btn-primary">Send Message</button>
  </form>
      
  {alert === "Success"?<Alert/> : null}
  {alert === "Error"?<AlertErr/> : null}
</div>

  </>
       );
  }


export default Contactform;

