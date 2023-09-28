import React, { useEffect } from 'react'
import Footer from './Footer'
import Aos from 'aos'
import "aos/dist/aos.css"

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div>

      <div className='ContactImg' data-aos="fade-up">
        <img className='img-fluid' src="Images/18.jpg" alt="" />
      </div>


      <h1 style={{ textAlign: "center", color: "tomato", fontWeight: "bold", margin: "10px 10px 10px 0px" }}><u> How To Contact</u></h1>

      <div className="container">
        <div className="row">


          <div className="col-sm-12 col-lg-6" data-aos="fade-up">
            <div className="contact-form">
              <form action="https://formspree.io/f/meqbjajq"
                method="POST"
                className="contact-inputs">

                <div className="TotalForm">

                  <div className="box12">
                    <label htmlFor="name">Enter Your Name</label> <br />
                    <input type="text" required name="name"
                      autoComplete="off" placeholder='Enter Your Name' id='name' />
                  </div>

                  <div className="box12">
                    <label htmlFor="email">Enter Your Email</label> <br />
                    <input type="email" required name="Email"
                      autoComplete="off" placeholder='Enter Your Email' id='email' />
                  </div>
                </div>

                <div className="TotalForm">

                  <div className="box12">
                    <label htmlFor="number">Enter Your Age</label> <br />
                    <input type="number" required name="number"
                      autoComplete="off" placeholder='Enter Your Age' id='number' />
                  </div>

                  <div className="box12">
                    <label htmlFor="mobile">Enter Your Mobile</label> <br />
                    <input type="number" required name="number"
                      autoComplete="off" placeholder='Enter Your Mobile' id='mobile' />
                  </div>
                </div>

                <div className="TotalForm textArea">
                  <div className="box12">
                    <label htmlFor="textarea">Enter Your Message</label> <br />
                    <textarea required
                      autoComplete="off" name="Message" id='textarea' placeholder='Give me your feedback' cols="25" rows="3"></textarea>
                  </div>


                </div>

                <div className="submitBtn">
                  <button type="submit" className='formbtn' value="send">Submit</button>
                </div>

              </form>
            </div>

          </div>


          <div className="col-sm-12 col-lg-6" data-aos="fade-up">
            <div className="box14">
              <div className="box13">
                <div><i class="fa-solid fa-location-dot"></i></div>
                <h3>Address</h3>
                <h6>KVR Enterprises Private Limited</h6>
                <p>Noida Sector 59 Uttar Pradesh</p>
              </div>
              <div className="box13">
                <div><i class="fa-solid fa-envelope"></i></div>
                <h3>Email</h3>
                <h6>You can enquary this email</h6>
                <p>ramesh@gmail.com</p>
              </div>
              <div className="box13">
                <div><i class="fa-solid fa-phone"></i></div>
                <h3>Phone</h3>
                <h6>For enquary dial</h6>
                <p>7523062030</p>
              </div>

            </div>
          </div>

        </div>
      </div>


      <div className="container mt-5 mb-5">
        <div className="row">

          <div className="col-md-6 col-lg-6" data-aos="fade-up">
            <div className="box15">
              <img className='img-fluid' src="Images/9.png" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-6" data-aos="fade-up">
            <div className="box16">
              <h1>Don't Miss Our News And Updates</h1>
              <p>We at Appzotech believe that Technology should be easily accessible to us that's why we are in constant search to bring new ways for Technology to people's lives. Let us know your email so that we can share what we found.</p>
            </div>
          </div>

        </div>
      </div>

      <div data-aos="fade-up">
        <Footer />
      </div>
    </div>
  )
}

export default Contact
