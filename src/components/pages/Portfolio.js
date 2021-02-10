import React from "react";
import Project from "../Project"
import portfolio from '../../portfolio.json'

const project = portfolio

function Portfolio() {
  return (
    <main class="container-sm">
        
        <section className="row mt-5 mb-5">
            <div className="col-lg-8 bg-white pb-3">
                
                <h1 className="pt-3 ml-3"> Portfolio</h1>
                <hr/>
                <div className="row mr-3">
                    <Project {...project[0]} />
                    <Project {...project[1]}/>
                    
                </div>

                <div className="row mr-3">
                    <Project {...project[2]}/>
                    <Project {...project[3]}/>
                    
                </div>
                <div className="row mr-3">
                    <Project {...project[4]}/>
                    
                    
                </div>

            </div>
        </section>


          
    </main>
  );
}

export default Portfolio;
