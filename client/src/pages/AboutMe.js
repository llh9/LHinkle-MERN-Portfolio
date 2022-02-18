import React from 'react';

const AboutMe = () => {
  return (
    <main>
      <div className="flex-row justify-center ">
        <div className='w-100 flex-row justify-center'>
          <h1 style={{color: "gray", fontSize: "35px", textShadow: "2px 2px teal"}}>AboutMe
          </h1>
          <h2 className="w-100 bg-secondary"style={{color: "gray", fontSize: "25px", textShadow: "2px 2px teal"}}>Junior Software Developer with a mission to advance the usability and performance of websites and applications used by businesses of any Industry. Has a background in Electrical and Electronics Engineering. Earned a certificate in Full Stack Web Development from The Ohio State University Coding Bootcamp and gained proficient experience with various new technologies, providing the most modern approach to developing websites and apps that can be used by all companies seeking technological advancement or modernization.
          </h2>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;