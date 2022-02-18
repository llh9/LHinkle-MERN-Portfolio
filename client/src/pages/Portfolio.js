import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <main>
      <div className="flex-row ">
        <div className="flex-column bg-secondary w-100">

          <div className='w-100'>
            <h1 style={{color: "white", fontSize: "35px", textShadow: "2px 2px teal"}}>Portfolio</h1><hr></hr>
          </div>

          <div className='flex-column justify-center align-center w-100'>
            <a href="https://llh9.github.io/Event-Search/" target="_blank" className="work" id="Planmark">
              <div>
                <h3 style={{color: "teal"}}>Planmark, Group Project</h3>
              </div>
            </a>
            {/* <hr style={{color: "white"}}></hr> */}
            <a href="https://llh9.github.io/Password-Generator/" target="_blank" className="work" id="PG" >
              <div>
                <h3 style={{color: "teal"}}>Password Generator, Homework</h3>
              </div>
            </a>
            {/* <hr style={{color: "white"}}></hr> */}

            <a href="https://llh9.github.io/Random-Quiz/" target="_blank" className="work" id="ppfp">
              <div>
                <h3 style={{color: "teal"}}>
                  Random Quiz, Homework
                </h3>
              </div>
            </a>
            {/* <hr style={{color: "white"}}></hr> */}
            <a href="https://cc-java-api-18.herokuapp.com/" target="_blank" className="work" id="tnj">
              <div>
                <h3 style={{color: "teal"}}>
                  Tech-News-Java-Api
                </h3>
              </div>
            </a>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;