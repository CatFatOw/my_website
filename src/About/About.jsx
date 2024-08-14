import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>

        <div className="about-sections">
            <div className="img_aboutme">
                <img src="src/images/my_profile_pic.jpg" alt="" className='about_me_img'/>
            </div>


            <div className="about-right">
                <div className="about-para">
                    <p>Hello, I am a current Senior at Idaho Falls High School. I am passionate about computer science and machine learning. As a small project, I created this website to showcase my achievements and hobbies while learning React. </p>
                    <p>Starting in middle school, I was first introduced to computer science through web design. Immediately, I was fascinated by how lines of code could dictate how a website formed. Later in high school, I had the amazing opportunity to intern at the Idaho National Laboratory. I was introduced to the complex intricacies of machine learning, and I developed my own semantic segmentation model to identify defect anomalies on irradiated materials (in the processing of publishing). Through this experience, I experienced the powerful impact and potential AI has on other interdisciplinary fields.</p>
                    <p>As my high school journey gradually approaches its end, I want to continue my passion for CS at my university. I want to learn about the theory of machine learning algorithms and why they are "black boxes"; I want to use my learned knowledge in CS or machine learning to make a positive impact while finding interdisciplinary uses.</p>
                    <p>Besides school or self-studying CS concepts, I like playing tennis and video games. I usually like to play Fortnite with my friends.</p>
                    
                </div> <br/>

            </div>
        </div>


        <div className="quick-stats">
        <h2 className='quick-stat'>At A Glance</h2>
        </div>

        <div className="about-achievements">
            <hr/>
            <div className="about-achievement">
          
                <h1>1550</h1>
                <p>SAT Score (760 eng, 790 math)</p>
            </div> <hr/>

            <div className="about-achievement">
                <h1>17+</h1>
                <p>Monthly Volunteer Activities With My Organization</p>
            </div><hr/>


            <div className="about-achievement">
                <h1>Summer Programs</h1>
                <p>Selected and participated in: Yale Young Global Scholars, Harvard Debate, and Idaho Science and Aerospace Scholars </p>
            </div><hr/>

            <div className="about-achievement">
                <h1>9+</h1>
                <p>Debate Awards (including state and national)</p>
            </div><hr/>


            <div className="about-achievement">
                <h1>AI</h1>
                <p>Developed state-of-the art AI model during internship at INL </p>
            </div> <hr/>


            <div className="about-achievement">
                <h1>Coding</h1>
                <p>All languages are self taught. I have basic knowledge of Python, HTML, CSS, and React. </p>
            </div> <hr/>   
        </div>
     
      
    </div>
  )
}

export default About
