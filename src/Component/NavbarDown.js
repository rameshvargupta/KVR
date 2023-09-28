import React, { useEffect } from 'react'
import Timer from './Timer'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"

const NavbarDown = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    return (
        <div>

            <div className="container Cont-1 mt-5">
                <div className="row">
                    <div className="col-md-5 col-sm-12 col-lg-5 mt-3" data-aos="fade-up">
                        <div className="firstSide">
                            <h1>
                                <span className='span1'> Confused</span> About
                                Career Selection?</h1>
                            <p>Get the right guidance and complete career counselling here.</p>
                           <Link to={"/About"}> <button>Go More Details</button></Link>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12 col-lg-7 mt-3" data-aos="fade-up">
                        <img className='img-fluid' src="Images/1.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="container cont-2 my-4" data-aos="fade-up">

                <h1 style={{ textAlign: "center", color: "tomato", fontWeight: "bold" }}><u>Our Working Process</u></h1>
                <div className="row mt-5">
          
                    <div className="col-6 col-sm-6 col-lg-6" data-aos="fade-up">

                        <div className="box">
                            <i class="fa-sharp fa-solid fa-plant-wilt"></i><span>PLANNING</span>
                        </div>

                    </div>
              
                    <div className="col-6 col-sm-6 col-lg-6"  data-aos="fade-up">
                        <div className="box">
                            <i class="fa-solid fa-wrench "></i> <span>PROTOTYPE</span>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-lg-6" data-aos="fade-up">
                        <div className="box">
                            <i class="fa-solid fa-toolbox"></i><span>KICK-OFF</span>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-lg-6" data-aos="fade-up">
                        <div className="box">
                            <i class="fa-solid fa-solid fa-gear"></i> <span>TESTING</span>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-lg-6" data-aos="fade-up">
                        <div className="box">
                            <i class="fa-solid fa-truck"></i><span>DELIVERY</span>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-lg-6" data-aos="fade-up">
                        <div className="box">
                            <i class="fa-solid fa-code"></i> <span>CODING</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container cont-3 mt-5">

                <div className="row">
                    <div className=" col-sm-12 col-lg-6" data-aos="fade-up">
                        <img className='img-fluid' src="Images/3.jpg" alt="" />
                    </div>
                    <div className=" col-sm-12 col-lg-6" data-aos="fade-up">
                        <div className="firstSide">
                            <h1>Working Process</h1>
                            <p>KVR Infotech is a leading IT service company, which provides customized solution in the field of Web and IT industry. We provide E-Commerce solutions through effective website development, website designing and multimedia. We use leading edge technology to gain sustainable competitive advantage in the business of IT. </p>
                          <Link to={"/Services"}>  <button>READ MORE</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container cont-4 my-5" data-aos="fade-up">
                <h1 style={{ textAlign: "center", color: "tomato", fontWeight: "bold" }}><u> Why Choose Us</u></h1>

                <div className="row mt-5" style={{margin:"5px"}}>

                    <div className="col-sm-6 col-lg-6">
                        <div className="secondside">
                            <h2>Keep Pace With Technology</h2>
                            <div>
                                KVR Infotech Pvt. Ltd. invests extensively in technology and domain research to understand how technology and how to get there. It’s about how to reduce impacts your business as a whole.strategic relationships with the world’s leading companies and partnerships with industry leaders allow us to stay ahead of the technology curve
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                        <div className="secondside">
                            <h2>Improve Business Process</h2>
                            <div>
                                In a constantly changing marketplace, Flexibility and adaptability are keys to any company being successful. It may need a comprehensive strategy to understand where it is, where it wants to go, and how to get there. It’s about how to reduce the costs and time needed to get them to market.where it wants to go.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <h1 style={{ textAlign: "center", color: "tomato", fontWeight: "bold", fontSize: "3.2rem" }}><u> Who Are We?</u></h1>
                <div className="row mt-5">
                    <div className="col-12 col-md-6 col-lg-6" data-aos="fade-top">
                        <div className="thirdside">

                            <ol>

                                <li>
                                    Prepare a Roadmap for Your Career with the help of the best career counselling in India.
                                    Overcome your Career insecurties, anxious and procrastinating behavior.
                                </li>


                                <li>
                                    Get insights into trending career option. Find and apt course for your profile.
                                    Explore the off-beat courses with the help of No.1 career councelling company in India.
                                </li>

                                <li>
                                    Get credible information and authentic review of top institute of India.
                                    Find a top college with the help of the best Career guidance company in India.
                                </li>
                            </ol>

                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6" data-aos="fade-top">
                        <img className='img-fluid' src="Images/9.png" alt="" />
                    </div>
                </div>
            </div>

      
            <div data-aos="fade-up">
       <Timer/>
       </div>

            <div className="container cont-6 mb-5 mt-5">
                <h1 style={{ textAlign: "center", color: "tomato", fontWeight: "bold",marginBottom:"50px" }}><u>Client-Testimonials</u></h1>
                <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-4" data-aos="fade-up">
                        <div className="box5">
                            <div className="inner3">
                                <p> <i class="fa-solid fa-quote-left"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum. <i class="fa-solid fa-quote-right"></i> </p>
                            </div>
                            <div className="inner4">
                                <h5>Barny Dillarstone</h5>
                                <div className="post">
                                    CEO and Founder
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4" data-aos="fade-up">
                        <div className="box5">
                            <div className="inner3">
                                <p> <i class="fa-solid fa-quote-left"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum. <i class="fa-solid fa-quote-right"></i> </p>
                            </div>
                            <div className="inner4">
                                <h5>Barny Dillarstone</h5>
                                <div className="post">
                                    CEO and Founder
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4" data-aos="fade-up">
                        <div className="box5">
                            <div className="inner3">
                                <p> <i class="fa-solid fa-quote-left"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum. <i class="fa-solid fa-quote-right"></i> </p>
                            </div>
                            <div className="inner4">
                                <h5>Barny Dillarstone</h5>
                                <div className="post">
                                    CEO and Founder
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarDown
