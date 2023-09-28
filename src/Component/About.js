import React, { useEffect } from 'react'
import Timer from './Timer'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div>
      <div className="container cont-7 my-5 ">

        <div className="row">
          <div className="col-sm-12 col-lg-6" data-aos="fade-up">
            <img className='img-fluid' src="Images/10.png" alt="" />
          </div>
          <div className="col-sm-12 col-lg-6" data-aos="fade-up">
            <div className="box6">
              <h1>Team With Hunger For New Technologies</h1>
              <p>We are a team of professional that believes in the betterment of the world by bringing new technologies to the reality. We believe that technology should be easily accessible to everyone that's why we are in constant search of new ways to bring technology to you.</p>
              <div className="box7">
                <i class="fa-regular fa-square-check"></i> <span className='aboutSpan'>Professional Consultancy Service</span> <br />
                <i class="fa-regular fa-square-check"></i> <span className='aboutSpan'>24/7 Support Center</span>
                <br />
                <i class="fa-regular fa-square-check"></i> <span className='aboutSpan'>Custom Service & Operation</span>
                <br />
                <i class="fa-regular fa-square-check"></i> <span className='aboutSpan'>Advanced Advisory Team</span>
                <br />
                <i class="fa-regular fa-square-check"></i> <span className='aboutSpan'>Custom Service & Operation</span>
                <br />
                <i class="fa-regular fa-square-check"></i> <span className='aboutSpan'>Advanced Advisory Team</span>
                <br />
              </div>
            </div>
          </div>
        </div>

       <div data-aos="fade-up">
       <Timer/>
       </div>
      </div>

      <div className="container mb-5 mt-5" >
        <div className="row">
          <div className="col-sm-12 col-lg-6" data-aos="fade-up">
            <div className="box8">
              <h1>Are you ready for a better, more productive business</h1>
              <p>We have a team of experts who are expert in understanding your business and bringing more productivity to it by bringing more interactive features to your app hence engaging more customers to your platform. Please leave your number and let our experts talk to you.</p>
             <Link to={'/Contact'}><button>Read More</button></Link> 
            </div>
          </div>
          <div className="col-sm-12 col-lg-6" data-aos="fade-up">
            <img className='img-fluid' src="Images/11.png" alt="" />
          </div>
        </div>
      </div>
      
      <div data-aos="fade-up">
      <Footer/>
      </div>
     
      
    </div>
  )
}

export default About
