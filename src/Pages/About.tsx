import React from 'react'
import square from '../images/square.svg'
import rightarrow from '../images/rightarrow.svg'
import fulltime from '../images/fulltime.svg'
import internship from '../images/internship.svg'

const About = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-[#42446E]-900 dark:text-white">About me </h2>
            <p className="mb-4 font-light">I have years of experience as a web developer and am skilled in front-end programming, database administration, and SEO. Through careful testing, optimizations, and effective data models, I improve the performance of websites. With my expertise in React and JavaScript, I design intuitive, dynamic user experiences. Improved search engine exposure and flawless functionality are guaranteed by my methodical approach. Together, let's improve your online visibility.</p>



          </div>
          <br /><br /><br />

          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-[#42446E]-900 dark:text-white">Work Experiace</h2>
            <br />
            <p className="mb-4 font-light"> SEO Expert & Junior Web Developer.</p>
              <img src={fulltime} alt="" />
              <br />
            <p className="mb-4 font-light">
              @ SMGC&nbsp;&nbsp;&#x1F4CD;&nbsp;&nbsp;Islamabad&nbsp;&nbsp;&#x25A0;&nbsp;&nbsp;Aug 2023 - June 2024
            </p>
            <hr />




          </div>
          <br /><br /><br />


          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            
            <p className="mb-4 font-light">WordPress Developer  . </p>
            <img src={fulltime} alt="" />
            <br />
            
            <p className="mb-4 font-light">
              @ Islamabad Chamber of Small traders&nbsp;&nbsp;&#x1F4CD;&nbsp;&nbsp;Islamabad&nbsp;&nbsp;&#x25A0;&nbsp;&nbsp;November 2022 - June 2023 
            </p>
              

            <hr />




          </div>
          <br /><br /><br />


          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            
            <p className="mb-4 font-light"> Web Development Intern.</p>
            <p className="mb-4 font-light">
            <img src={internship} alt="" />
            <br />
              @ Daxno&nbsp;&nbsp;&#x1F4CD;&nbsp;&nbsp;Islamabad&nbsp;&nbsp;&#x25A0;&nbsp;&nbsp; April 2022- July 2022
            </p>
            <hr />




          </div>
          <br /><br /><br />
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-[#42446E]-900 dark:text-white">Education</h2>
            <p className="mb-4 font-light"> Bachelor's of Science in Software Engineering.</p>
            <p className="mb-4 font-light">
              <img src={fulltime} alt="" />
              <br />
              @  Comsats University &nbsp;&nbsp;&#x1F4CD;&nbsp;&nbsp;Islamabad&nbsp;&nbsp;&#x25A0;&nbsp;&nbsp; October 2018 - Feb 2023
            </p>



          </div>


        </div>
      </section>
    </div>
  )
}

export default About
