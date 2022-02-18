import React from 'react';

const Resume = () => {
  return (
    <main>
      <div className="flex-row ">
        <div className='w-100'>
          <h1 style={{color: "white", fontSize: "35px", textShadow: "2px 2px teal"}}>Resume</h1><hr></hr>
        </div>   

        <div className='skills flex-row w-100 justify-space-between p-1'>

          <div className='gitBg'>
            <div className='git' />
          </div>

          <div className='githubBg'>
            <div className='github' />
          </div>

          <div className='jsBg'>
            <div className='js' />
          </div>

          <div className='htmlBg'>
            <div className='html' />
          </div>

          <div className='cssBg'>
            <div className='css' />
          </div>

          <div className='mongoBg'>
            <div className='mongo' />
          </div>

          <div className='mySQLBg'>
            <div className='mySQL' />
          </div>

          <div className='graphQLBg'>
            <div className='graphQL' />
          </div>
        
        </div>
         
      </div>
    </main>
  );
};

export default Resume;