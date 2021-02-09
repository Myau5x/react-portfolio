import React from "react";

function Footer() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  

  return (
    <footer class="fixed-bottom bg-dark text-center"> 
        <div class="row">
          <div class="col bg-info pb-1">
          </div>      
        </div>
        <div class="row ">
          <div class="col-12 text-center pt-1">
           <p> &copy; Copyright </p>
          </div>
        </div> 
      </footer>
  );
}

export default Footer;
