import React from "react";

function Project(props) {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  

  return (
    <div className="col-md-6">
    <h3 className= "prj"> 
    {props.name}
    </h3>
    <a className = "prj" href={props.deployed}>Deployed</a>
    <hr/>
    <a className = "prj" href={props.github}>Github</a>
    
      <img src = {props.image} className="img-fluid mb-3 mr-3" alt={props.alt}/>
  </div> 
  )
}

export default Project;