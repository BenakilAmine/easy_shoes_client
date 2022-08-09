import React from 'react';
import "../styles/Footer.scss";

function Footer() {
    return (
        <div>
        <footer>
            <div className="services">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div className="about">
                        <h3>Help</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Legacy</a></li>
                        </ul>
                    </div>
                    <div className="careers">
                        <h3>Get Social</h3>
                        <ul>
                            <li><a href="#">Job openings</a></li>
                            <li><a href="#">Employee success</a></li>
                            <li><a href="#">Benefits</a></li>
                        </ul>
                    </div>
                    <div className="Contact">
                        <h3>Contact</h3>
                        <ul>
                            <li><a href="#">7/4 Fire Brigad Road, Khulna, 91000, Paris</a></li>
                            <li>Phone: <a href="#">07-00-00-00-00</a></li>
                            <li>Email: <a href="#">support@domain.com</a></li>
                        </ul>
                    </div>
        </footer>
        <div className='bandeau'>
        Copyright 2016. All Rights Reserved.
        </div>
        </div>
    )
}

export default Footer;
