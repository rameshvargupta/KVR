import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className="foot">
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="box4">
                            <h3>Follow Us</h3>
                            <hr />
                            <ul>
                                <li><a href=""> <i class="fa-brands fa-facebook"></i> Facebook</a></li>
                                <li><a href=""> <i class="fa-brands fa-linkedin-in"></i> Linkedin</a></li>
                                <li><a href=""> <i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="box4">
                            <h3>Useful links</h3>
                            <hr />
                            <ul>
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/About"}>About</Link></li>
                                <li><Link to={"/Services"}>Services</Link></li>
                                <li><Link to={"/Contact"}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="box4">
                            <h3>Contact Info</h3>
                            <hr />
                            <ul>
                                <li><i class="fa-solid fa-phone"></i>Phone <br /><a href="">7523062030</a></li>
                                <li><i class="fa-solid fa-envelope"></i> Email <br /><a href="">rameshvargupta86@gmail.com</a></li>
                                <li><i class="fa-solid fa-location-dot"></i>Address <br /><a href="">Noida Sector 59, UP, India</a></li>
                            </ul>
                        </div>
                    </div>
                
                </div>
               
            </div>
            <div className="LastFooter">
                    <p>copyright @ august 2023 created by Rameshvar Gupta, Web Developer, UP</p>
                </div>
        </div>
    )
}

export default Footer

