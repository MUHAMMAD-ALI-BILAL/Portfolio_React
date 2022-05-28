import React from 'react';
import "../App.css";
import "../service.css";
import { Row, Col, Container } from 'react-bootstrap';
import Tic_Tac from '../PIc/Tic1.jpeg';

export default function Projects() {

  function proj1(){
    window.open("https://github.com/MUHAMMAD-ALI-BILAL/TIC_TAC_TOE-Game");
  }

  return (
    <div id='proj_color'>
        <div>
            <h1 id='Pheaing'>My Project's</h1>
        </div>

<Container>
    <Row>
    <Col  md={4}>
    <div className="box" id='projdiv'>

    <div className="center"><img className="center" id='proj_img' src = {Tic_Tac} alt=''></img>
    </div>
    <div id='btndiv'>
    <button id="projdet" onClick={proj1}><u>Project Detail</u></button>
    </div>

    {/* <h5 id ='text_logo'>FAST University</h5> */}
  
    </div>
    </Col>
    </Row>
</Container>

    </div>
  )
}
