import React from "react";
import Project from "../Project"


const project = [{
  "name": "PNW Whales",
  "github":"https://github.com/watchNW/whale-watching",
  "deployed": "https://fathomless-springs-89027.herokuapp.com/",
  "image": "./images/whales.png",
  "alt":"whale"
},
{
  "name": "Dumbbells_and_Donuts",
  "github":"https://github.com/Alischrec/Dumbbells_and_Donuts",
  "deployed": "https://alischrec.github.io/Dumbbells_and_Donuts/",
  "image": './images/donuts.png',
  "alt":"Dumbbells_and_Donuts website"
},
{
  "name": "Eat-Da-Burgers",
  "github":"https://github.com/Myau5x/eat-da-burger",
  "deployed": "https://gentle-cove-02312.herokuapp.com/",
  "image": "./images/eatdaburger.png",
  "alt":"burger"
},
{
  "name": "Javascript quiz",
  "github":"https://github.com/Myau5x/javascript_quiz_hw4",
  "deployed": "https://myau5x.github.io/javascript_quiz_hw4/",
  "image": "./images/quiz.png",
  "alt":"quiz"
},
{
  "name": "Weather Dashboard",
  "github":"https://github.com/Myau5x/weather_city_btns",
  "deployed": "https://myau5x.github.io/weather_city_btns/",
  "image": './images/weather.png',
  "alt":"weather dashboard"
},
]

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
