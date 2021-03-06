import React, { useState } from 'react';

const Portfolio = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShown0, setIsShown0] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  return (
    <main>
      <div className="flex-row ">
        <div className="flex-column bg-secondary w-100 ">

          <div className='w-100'>
            <h1 style={{color: "white", fontSize: "35px", textShadow: "2px 2px teal"}}>Portfolio</h1><hr></hr>
          </div>

          <div className='flex-column justify-center align-center w-100 prtflo'>
            <a href="https://llh9.github.io/Event-Search/" target="_blank" className="work" id="Planmark" onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
              <div>
                <h3 style={{color: "white", borderBlockEndStyle: "ridge", background: ""}}>Planmark, Group Project</h3>
                {isShown && (

                <div className='desc'>
                  <a href="https://github.com/llh9/Event-Search" target="_blank" className='repoLink'>
                    <div className='btn githubBg '>
                      <div className='github' />
                    </div>
                  </a>
                  <p className="w-50 descItm" style={{ color: "white" }} >Created to provide users with an easy means to find available local activities where and whenever the user may be located.
                  </p>
                  <p className="w-50 descItm" style={{ color: "white" }} >Technologies Utilized - Languages - HTML5, CSS3, JavaScript 
                  </p>
                  <p className="w-50 descItm" style={{ color: "white" }} >API's - Open Weather Map API, Ticket Master API Link to Event Search Deployment - https://llh9.github.io/Event-Search/
                  </p>
                  <p className="w-50 descItm" style={{ color: "white" }} >Topics - api-service, html, css, javascript
                  </p>
                </div>
                )}
              </div>
            </a>
            <a href="https://llh9.github.io/Password-Generator/" target="_blank" className="work" id="PG" onMouseEnter={() => setIsShown0(true)}
            onMouseLeave={() => setIsShown0(false)}>
              <div>
                <h3 style={{color: "white", borderBlockEndStyle: "ridge"}}>Password Generator, Homework</h3>
                {isShown0 && (
                <div className='desc'>
                  <a href="https://github.com/llh9/Password-Generator" target="_blank" className='repoLink'>
                    <div className='btn githubBg '>
                      <div className='github' />
                    </div>
                  </a>
                  <p className="w-50 descItm mr-1" style={{ color: "white" }} >Password Generation app - offers a user-defined, criteria-based password.
                  </p>
                  <p className="w-50 descItm" style={{ color: "white" }} >Technologies Utilized - Languages - HTML5, CSS3, JavaScript, Node.js
                  </p>
                  <p className="w-50 descItm" style={{ color: "white" }} >
                  Topics - password-generator security-tools
                  </p>
                </div>
                )}
              </div>
            </a>

            <a href="https://llh9.github.io/Random-Quiz/" target="_blank" className="work" id="ppfp"
            onMouseEnter={() => setIsShown1(true)}
            onMouseLeave={() => setIsShown1(false)}>
              <div>
                <h3 style={{color: "white", borderBlockEndStyle: "ridge"}}>
                  Random Quiz, Homework
                </h3>
                {isShown1 && (

                <div className='desc'>
                  <a href="https://github.com/llh9/Random-Quiz" target="_blank" className='repoLink'>
                    <div className='btn githubBg '>
                      <div className='github' />
                    </div>
                  </a>
                  <p className=" w-50 descItm" style={{ color: "white" }} >(Short Demo) Quiz app that utilizes local storage to keep a record of quiz takers and associated stats.
                  </p>
                  <p className=" w-50 descItm" style={{ color: "white" }} >Technologies Utilized - Languages - HTML5, CSS3, JavaScript, Node.js
                  </p>
                  <p className=" w-50 descItm" style={{ color: "white" }} >
                    Topics - html, css, javascript
                  </p>
                </div>
                )}
              </div>
            </a>
            <a href="https://cc-java-api-18.herokuapp.com/" target="_blank" className="work" id="tnj" onMouseEnter={() => setIsShown2(true)}
            onMouseLeave={() => setIsShown2(false)}>
              <div>
                <h3 style={{color: "white", borderBlockEndStyle: "ridge"}}>
                  Tech-News-Java-Api
                </h3>
                {isShown2 && (
                <div className='desc'>
                  <a href="https://github.com/llh9/tech-news-java-api" target="_blank" className='repoLink'>
                    <div className='btn githubBg '>
                      <div className='github' />
                    </div>
                  </a>
                  <p className="w-50 descItm" style={{ color: "white" }} >Java Spring Boot Project "Just Tech News App" (First Java application) cc-java-api-18.herokuapp.com/
                  </p>
                  <p className="w-50 descItm" style={{ color: "white" }} >Technologies Utilized - Languages - Java, HTML5, CSS3, JavaScript 
                  </p>
                  <p className="w-50 descItm" style={{ color: "white" }} >
                  Topics - Java, Maven, Springboot, Springinitializr
                  </p>
                </div>
                )}
              </div>
            </a>

          
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default Portfolio;