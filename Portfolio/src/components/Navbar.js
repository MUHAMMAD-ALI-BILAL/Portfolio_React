import React, {useState} from 'react';
import "../App.css";

 export default function Navbar() {

  const[navbar, setnavbar] = useState(false);

  const chnagebackground = () =>{
      if(window.scrollY >= 60)
      {
      setnavbar(true);
      }
      else{
        setnavbar(false);
      }
  }
  
  window.addEventListener('scroll', chnagebackground);

    return(   
  
     <>
  <nav className="navbar navbar-expand-lg" id ="padding">
   <div className="container-fluid" id = {navbar ? "navcheck" : "navbarstyle"}>
   
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav " >
         <li className="nav-item active" style={{marginLeft:200}}>
           <a className="nav-link active" aria-current="page" id = "stylecss" href="#home">Home</a>
         </li>
         <li className="navbar-nav">
           <a className="nav-link active" aria-current="page" id = "stylecss" href="#services">Services</a>
         </li>
         <li className="navbar-nav" >
           <a className="nav-link active" aria-current="page" id = "stylecss" href="#about">About</a>
         </li>
         <li className="navbar-nav">
           <a className="nav-link active" aria-current="page" id = "ME" href="/">Me.</a>
         </li>
         <li className="nav-item active">
           <a className="nav-link active" aria-current="page" id = "stylecss" href="#portfolio">Portfolio</a>
         </li>
         <li className="navbar-nav">
           <a className="nav-link active" aria-current="page" id = "stylecss" href="#Projects">Projects</a>
         </li>
         <li className='navbar-nav'>
           <a className='nav-link active' id = "stylecss" aria-current="page" href="#contact">Contact</a>
         </li>
      
       </ul>
     </div>
   </div>
 </nav>

 </>
    )
}
    
    
    
