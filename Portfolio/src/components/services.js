import React from 'react';
import "../App.css";
import "../service.css";
import { Row, Col, Container } from 'react-bootstrap';


export default function Services() {
    return (

  <div style={{backgroundColor : "salmon",  height:"100ch"}}>
      <div id = "sertext1">
       <h1>My Services</h1>
       </div>


        <Container>
        <Row>
          <Col  md={6}>
       <div style={{padding: "1ch 0ch"}}>
       <div className="card w-100" id = "sercard1">
        <div className="card-body">
        <div className="e-card-header-image football e-card-corner" id="imagecard1"></div>
        <h5 className="card-title">Web Development</h5>
        <p className="card-text" style={{fontSize: "17px"}}>Working on one of the popular framework like React, Unique Skills</p>
       </div>
       </div>
       </div>
          </Col>

          <Col md={6}>
          <div style={{padding: "1ch 0ch"}}>
       <div className="card w-100" id = "sercard1">
        <div className="card-body">
        <div className="e-card-header-image football e-card-corner" id="imagecard3"></div>
        <h5 className="card-title">Desktop Application</h5>
        <p className="card-text">Experience in Desktop Application Projects using Csharp language</p>
       </div>
       </div>
       </div>
          </Col>
       </Row>

       <Row>
          <Col  md={6}>
          <div style={{padding:"1ch 0ch"}}>
       <div className="card w-100" id = "sercard1">
        <div className="card-body">
        <div className="e-card-header-image football e-card-corner" id="imagecard2"></div>
        <h5 className="card-title">Web Design</h5>
        <p className="card-text">UI/UX Website Design according to user Requirements.</p>
       </div>
       </div>
       </div>
          </Col>

          <Col md={6}>
        
          <div style={{padding:"1ch 0ch"}}>
       <div className="card w-100" id = "sercard1">
        <div className="card-body">
        <div className="e-card-header-image football e-card-corner" id="imagecard4"></div>
        <h5 className="card-title">Brand & Logo Design</h5>
        <p className="card-text">Brand & Logo Design for new Companies, Websites, Youtube or Brands</p>
       </div>
       </div>
       </div>
          </Col>
       </Row>
      </Container>
      </div>


    )
  }

