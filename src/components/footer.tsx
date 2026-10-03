import facebook from '../assets/Images/facebook.svg'
import instagram from '../assets/Images/instagram.svg'
import x from '../assets/Images/x.svg'

import "./footer.css"

export function Footer() {
    return (
        <div className="footer">
            <div className="bondage">
                <h3>Bandage</h3>
                <div className="icon">
                    <img src={facebook} className="icon"/>
                    <img src={instagram} className="icon" />
                    <img src={x} className="icon"/>
                </div>
            </div>

            <div className="information">
                <div className="com-content">
                    <h4>Company Info</h4>
                    <ul className="com-info section">
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h4>Legal</h4>
                    <ul className="legal section">
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className="feat-content">
                    <h4>Features</h4>
                    <ul className="features section">
                        <li>Business Marketing</li>
                        <li>User Analytic</li>
                        <li>Live Chat</li>
                        <li>Unlimited Support</li>
                    </ul>
                </div>

                <div className="resouc-content">
                    <h4>Resources</h4>
                    <ul className="resources section">
                        <li>IOS & Android</li>
                        <li>Watch a Demo</li>
                        <li>Customers</li>
                        <li>API</li>
                    </ul>
                </div>

                <div className="box-info">
                    <h5>Get In Touch</h5>
                    <form action="">
                        <input type="email" className="email-input" placeholder="Your Email" />
                        <button className="subscription" type="button">Subscribe</button>
                    </form>
                    <h6>Lorem ipsum dolor Amit</h6>
                </div>
            </div>

            <div className="last">
                <h5>Made With Love By Finland All Right Reserved</h5>
            </div>
        </div>
    )
}