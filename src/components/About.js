import React from 'react'

function About() {
    return (
        <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 style={{fontSize:'2.5rem'}}className="title-font sm:text-4xl text-43l mb-4 font-medium text-white">
              Welcome
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed" style={{fontSize:'1.5rem'}}>
            My name is Jimmy Walker.  I am a self-taught and self-motivated web developer.  I have a great understanding of many different web technologies.  My main focus is on the front end using HTML, CSS, and Javascript.  
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Send me an Email
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Projects
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://media.istockphoto.com/photos/aspiration-concept-picture-id1355553989?b=1&k=20&m=1355553989&s=170667a&w=0&h=TkUwZkHLkgzTv7ONq-QBCOSyfvfSFGnLseJglkcg5jk="
            />
          </div>
        </div>
      </section>
    )
}

export default About
