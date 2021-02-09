import React from "react";
import { Link, Route } from "react-router-dom";
//import Learn from "./Learn";

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <div className="row pt-3">
              <div className="col" id="name">Olga Illarionova</div>
              <div className="col"> <a href="mailto:ola.illari@gmail.com"><i className="far fa-envelope"></i> ola.illari@gmail.com </a></div>
              <div className="col" id="phone"><a href="tel:+14252479075"><i className="fas fa-phone"></i> 1 (425) 247-9075</a></div>
      </div>
      
      
      
    </div>
  );
}

export default Contact;
