import React, { useState } from 'react';


const Resume = () => {

  const [isShown, setIsShown] = useState(false);

  return (
    <main>
      <div className="flex-row ">

        <div className='w-100'>
          <h1 style={{color: "white", fontSize: "35px", textShadow: "2px 2px teal" }}>Resume</h1><hr></hr>
          <h1 className='w-100 flex-row justify-center bg-dark align-center'style={{color: "white", fontSize: "20px", textShadow: "2px 2px teal" }}>Technical Proficiencies</h1>
        </div>   

        <div className='skills flex-row w-100 justify-space-between p-1'>

          <div className='gitBg '>
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
        <div className='rsmBtns w-100'>
          <btn className='atsRsmeTgl btn btn-info m-2 justify-center align-center' onClick={() => setIsShown(true)}>
            <p>Click Here to View Resume</p>
          </btn>
          <h1 className='w-50 flex-row justify-center bg-dark 'style={{color: "white", fontSize: "20px", textShadow: "2px 2px teal" }}>Click on the Resume for detailed link</h1>
          <btn className='atsRsmeTgl btn btn-info m-2 justify-center align-center' onClick={() => setIsShown(false)}>
            <p>Click Here to hide Resume</p>
          </btn>
        </div>
        {isShown && (
        <a target={'_blank'} href={'https://docs.google.com/document/d/1fLn-E-rHDF7tc7OqtrlM5eErEBAuj8hOhoHhVZ2pKk4/edit?usp=sharing'}className='atsResume'>
          <h1></h1>
        </a>
        )}
      </div>
    </main>
  );
};

export default Resume;