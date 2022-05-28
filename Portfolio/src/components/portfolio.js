import React from 'react';
import "../App.css";
import "../service.css";
import image from '../ICON_PIC/git.png';
import image2 from '../ICON_PIC/I1.png';
import image3 from '../ICON_PIC/csha.png';
import image4 from '../ICON_PIC/block_ICON.png';
import Cer1 from "../PIc/cer1.jpeg";
import Cer2 from "../PIc/cer2.jpeg";
import Cer3 from "../PIc/cer3.jpeg";
import Cer4 from "../PIc/Blockchain.pdf";
import { Row, Col, Container } from 'react-bootstrap';


export default function portfolio() {
  return (
<div style={{backgroundColor:"#f5f5f5",  height:"80ch"}}>

      <div id ="Portfolioheading">
          <h1>My Portfolio</h1>
      </div>

      
 <Container>
    <Row>
    <Col  md={4} id = 'site-block'>
    <div className="box"  style={{backgroundColor : "white", paddingTop:"10%", borderRadius:"3%"}}>

    <div id='logo'><img src = {image} alt=''></img>
    </div>

  <h5 className="title" style={{textAlign :"center"}}><a style={{textDecorationLine : 'none'}} id='href_text' href = {Cer1}>Git Hub Certificate 2020</a></h5>
  <h5 id ='text_logo'>FAST University</h5>
  
  </div>
    </Col>


    <Col md={4} id = 'site-block'>
    <div className="box" style={{backgroundColor : "white", paddingTop:"10%", borderRadius:"3%"}}>

<div id='logo'><img src = {image2} alt=''></img>
</div>

<h5 className="title" style={{textAlign :"center"}}><a style={{textDecorationLine : 'none'}} id='href_text' href = {Cer2}>Git Hub Certificate 2020</a></h5>
<h5 id ='text_logo'>FAST University</h5>
    
  </div>
  </Col>


  <Col md={4} id = 'site-block'>
    <div className="box" style={{backgroundColor : "white", paddingTop:"10%", borderRadius:"3%"}}>

<div id='logo'><img src = {image3} alt=''></img>
</div>

<h5 className="title" style={{textAlign :"center"}}><a style={{textDecorationLine : 'none'}} id='href_text' href = {Cer3}>Git Hub Certificate 2020</a></h5>
<h5 id ='text_logo'>FAST University</h5>
</div>
</Col>
</Row>

<Row>
<Col md={4} id = 'site-block'>
    <div className="box" style={{backgroundColor : "white", paddingTop:"10%", borderRadius:"3%"}}>

<div id='logo'><img src = {image4} alt=''></img>
</div>

<h5 className="title" style={{textAlign :"center"}}><a style={{textDecorationLine : 'none'}} id='href_text' href = {Cer4}>Git Hub Certificate 2020</a></h5>
<h5 id ='text_logo'>FAST University</h5>
</div>
</Col>
</Row>
</Container>


</div>
  )
}
