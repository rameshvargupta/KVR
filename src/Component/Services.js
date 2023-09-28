import React, { useEffect } from 'react'
import Footer from './Footer'
import Aos from 'aos'
import "aos/dist/aos.css"

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div>
      <div className="services">
        <div className="container" >
          <img className='img-fluid' src="Images/12.jpg" alt="" />
        </div>

        <div className="container box9">
          <h1 style={{ textAlign: "center", color: "tomato", fontWeight: "bold" }}><u> Software Developement Services</u></h1>

          <div className="row my-5">
            <div className="col-sm-12 col-lg-6" data-aos="fade-up" >

              <div className="row">

                <div className="col-6 col-lg-6"  data-aos="fade-up" >
                  <h4 className='servicepart'>Mobile App Development </h4>
                </div>

                <div className="col-6 col-lg-6" data-aos="fade-up">
                  <h4 className='servicepart'>DevOps Services </h4>
                </div>
                <div className="col-6 col-lg-6"  data-aos="fade-up">
                  <h4 className='servicepart'>Automatic Optimization</h4>
                </div>

                <div className="col-6 col-lg-6" data-aos="fade-up">
                  <h4 className='servicepart'>Application Services</h4>
                </div>
                <div className="col-6 col-lg-6"  data-aos="fade-up">
                  <h4 className='servicepart'>It Security Services </h4>
                </div>

                <div className="col-6 col-lg-6" data-aos="fade-up">
                  <h4 className='servicepart'>Cloud Advisory Services </h4>
                </div>
                <div className="col-6 col-lg-6"  data-aos="fade-up">
                  <h4 className='servicepart' >Hybrid App Development </h4>
                </div>

                <div className="col-6 col-lg-6" data-aos="fade-up">
                  <h4 className='servicepart' >Services Integration services</h4>
                </div>
                <div className="col-6 col-lg-6"  data-aos="fade-up">
                  <h4 className='servicepart' >Ios App Development </h4>
                </div>

                <div className="col-6 col-lg-6" data-aos="fade-up">
                  <h4 className='servicepart' >Api Integration Services </h4>
                </div>
                <div className="col-6 col-lg-6"  data-aos="fade-up">
                  <h4 className='servicepart' >Api App Development </h4>
                </div>

                <div className="col-6 col-lg-6" data-aos="fade-up">
                  <h4 className='servicepart' >Api Testing Services</h4>
                </div>
                <div className="col-6 col-lg-6"  data-aos="fade-up">
                  <h4 className='servicepart' >UI/UX Design Services </h4>
                </div>

                <div className="col-6 col-lg-6" data-aos="fade-up">
                  <h4 className='servicepart' >Blockchain Development </h4>
                </div>

              </div>
            </div>

            <div className="col-sm-12 col-lg-6" data-aos="fade-up">
              <img className='img-fluid' src="Images/13.png" alt="" />
            </div>
          </div>
        </div>

        <div className="container">
          <h1 style={{ textAlign: "center", color: "tomato", fontWeight: "bold" }}><u>Explore Our Services</u></h1>

          <div className="row mt-5">

            <div className="col-sm-6 col-lg-4" data-aos="fade-up">
              <div className="box10">
                <h5> <i class="fa-solid fa-apple-whole"></i>App Development</h5>
                <p>We provide world-class services in building future-ready apps with high-class interactive UI design and easy UX to give an awesome experience to the end-users.</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4" data-aos="fade-up">
              <div className="box10">
                <h5><i class="fa-solid fa-blog"></i> Web Development</h5>
                <p>We provide world-class services in building future-ready web apps. We mainly focus on giving users the best experience along with keeping in mind the SEO friendliness of the web app.</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4" data-aos="fade-up">
              <div className="box10">
                <h5> <i class="fa-solid fa-mobile"></i>Mobile App Development</h5>
                <p>We provide diverse mobile app development for industries, ensuring robust, user-friendly apps for iOS and Android. Delivering high-quality, with your objectives is our pride.</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4" data-aos="fade-up">
              <div className="box10">
                <h5> <i className='fa fa-home'></i>DevOps</h5>
                <p>We provide world-class DevOps implementation services to build highly secure and scalable infrastructure. We have a great team who are RedHat Certified professionals.</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4" data-aos="fade-up">
              <div className="box10">
                <h5> <i class="fa-brands fa-hive"></i>Blockhain, NFT</h5>
                <p>We provide world-class services in building Blockchain,NFT. Blockchain is the in-demand technology where most of the businesses trying to utilize to leverage their businesses.</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4" data-aos="fade-up">
              <div className="box10">
                <h5><i class="fa-brands fa-cloudflare"></i>Cloud Consulting Services</h5>
                <p>We empower businesses with customized cloud solutions and expert guidance to unlock their full potential. Our certified team of  technology with your goals for sustainable growth.</p>
              </div>
            </div>


          </div>
        </div>

        <div className="container cont-last">
          <div className="row">
            <div className="col-sm-12 col-lg-6" data-aos="fade-up">
              <img className='img-fluid' src="Images/15.png" alt="" />
            </div>
            <div className="col-sm-12 col-lg-6"  data-aos="fade-up">
              <div className="box11">
                <h1>
                  Don't Miss Our News And Updates</h1>
                  <p>We at Appzotech believe that Technology should be easily accessible to us that's why we are in constant search to bring new ways for Technology to people's lives. Let us know your email so that we can share what we found.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
   <div data-aos="fade-up">
   <Footer/>
   </div>
    </div>
  )
}

export default Services
