import React from "react";

function About() {
  return (
    <div className="container-sm">
        <div className="row mr-sm-2 ml-sm-2 mb-5">
          <div className="col-md-8 bg-white mt-5">
                <h1 className="pt-2">About me</h1>
                <hr/>
                <div className="float-left mr-3">
                <img src="https://myau5x.github.io/portfolio_resp/images/linkedin_a.JPG" alt="me"/>

                </div>
                <p>
                  I am full stack developer from Bothell WA
                </p>
                <p>
                  I have Master’s Degree in Mathematics from top Russian University (MSU) and Certificate in web development from University of Washington .
                </p>
                <p>
                  I have passion to learn new technologies. Newly developed skills in Node.js, Javascript, Express, Handlebars, Mongo, HTML, CSS. Also have experience in scripting (Python) and SQL.
                </p>
                <p>
                  My experience in support roles made me a very customer-oriented person. I am passionate about translating user requirements to code and look forward to utilizing this skill to solve business problems. I believe that my educational and professional background in technology, combined with a passionate drive to effectively solve problems, would make me a strong addition to any team
                </p>
            </div>
        </div>
        <div className="row mr-sm-2 ml-sm-2 mb-5">
          <div className="col-md-8 bg-white mt-3">
            <div className="row">
            <div className="col-md">
              <a href="https://www.linkedin.com/in/olaillari/"> LinkedIn</a>
            </div>
            <div className="col-md">
              <a href="https://github.com/Myau5x/"> GitHub</a>
            </div>
            <div className="col-md">
              <a href="https://myau5x.github.io/portfolio_resp/documents/Olga_Illari_FED_020121.pdf"> Resume</a>
            </div>
          </div>
          </div>
        </div>
        
    </div>
  );
}

export default About;
