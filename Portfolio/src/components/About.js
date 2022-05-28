import React from 'react';
import "../App.css";
import "../service.css";
import location from "../ICON_PIC/Loc1.png";
import mail from "../ICON_PIC/mail.png";
import phone from "../ICON_PIC/phone.png";
import Linkedin from "../ICON_PIC/linkedin.png";
import Facebook from "../ICON_PIC/facebook1.png";
import Twitter from "../ICON_PIC/twitter.png";
import Github from "../ICON_PIC/github.png";


import { Container,Col,Row } from 'react-bootstrap';

export default function About() {

  function linkedin(){
    window.open("https://www.linkedin.com/in/ali-bilal-433253230/");
  }

  function facebook(){
    window.open("https://www.facebook.com/profile.php?id=100009174090844");
  }

  function twitter(){
    window.open("https://twitter.com/Ali_Bilal_1");
  }

  function guithub(){
    window.open("https://github.com/MUHAMMAD-ALI-BILAL");
  }


  return (

    <div style={{backgroundColor : "#f8f9fc",  height:"100ch"}}>
        <div id = "Aboutheading">
          <h1>About Me</h1>
        </div>
          <hr style={{marginLeft:110, marginRight:1070, marginTop:"0ch", border: "1px solid #080807", top:"9%", position:"relative"}} ></hr>
        <div>
          <Container>
            <Row>
              <Col md={6} >
                <div id = "Aboutpic"></div>
              </Col>

              <Col md={6}>
                <h2>HI i am Ali.</h2>
                <p id="AboutPara">There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href="/">alteration</a> 
                in some form, by injected humour, or randomised words which dont look even slightly believable. 
                If you are going to use a passage of Lorem Ipsum</p>
                {/* <button id = "Aboutbtn">Contact Me</button> */}
                <br/>
              <p><img src = {location} alt=''></img>&nbsp;&nbsp;Lahore, Pakistan</p>
              
              <p><img src = {mail} alt=''></img>&nbsp;&nbsp;alibilalkhan15@gmail.com</p>

              <p><img src = {phone} alt=''></img>&nbsp;&nbsp;+92 03351468106</p>
        <br/>
              <div><button id ="btn_Link" onClick={linkedin}><img src = {Linkedin} alt=''></img></button> 
              &nbsp;&nbsp;<button id ="btn_Link" onClick={twitter}><img src = {Twitter} alt=''></img></button>&nbsp;&nbsp;  
              <button id ="btn_Link" onClick={guithub}><img src = {Github} alt=''></img></button>&nbsp;&nbsp;
              <button id ="btn_Link" onClick={facebook}><img src = {Facebook} alt=''></img></button></div>

              </Col>
            </Row>
          </Container>
        </div>
    </div>
        
  )
}
