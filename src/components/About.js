import React from 'react'
import AboutImg from "../assets/images/about-img"

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <h1 className="heading">
            <span>about</span> us
        </h1>
        <div className="row">
            <div className="image">
                <img src={AboutImg} alt="" />
            </div>
            <div className="content">
                <h3>What Makes Our Food Special?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illum ad, neque dolorum, quo officia tenetur
                 laboriosam voluptatibus velit consectetur corporis asperiores sint nemo explicabo. Quos aperiam doloremque at vitae.</p>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea blanditiis est rerum in, libero maxim
                 e deserunt consequuntur ipsum cumque error voluptate ipsam, r eligendi beatae assumenda vel.</p>
                 <a href="#" className="btn">Learn More</a>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
