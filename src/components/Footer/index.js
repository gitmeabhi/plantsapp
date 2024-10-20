import React from 'react'

import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./index.css"


const Footer = () => {
  return (
    <div className='footer-container'>
       <div className='fulls'>
       <div className='footer-list-container'>
        <div className='email-container'>
            <h1 className='head1'>SUBSCRIBE TO OUR NEWSLETTER</h1>
            <p className='email-para'>
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim
            </p>
            <input type='text' placeholder='Enter Your Email Address ' className='enter-email' />
            <button type='button' className='subscribe-btn'>SUBSCRIBE</button>
        </div>
        <div className='email-container'>
            <h1 className='head1'>ABOUT US</h1>
             <ul className='footer-small-items'>
                <li className='small-item'>Our Story</li>
                <li className='small-item'>Blogs</li>
                <li className='small-item'>Careers</li>
                <li className='small-item'>Contact Us</li>
                <li className='small-item'>Help & Support</li>
             </ul>
        </div>

        <div className='email-container'>
            <h1 className='head1'>OUR SERVICES</h1>
             <ul className='footer-small-items'>
                <li className='small-item'>Book Maali</li>
                <li className='small-item'>Plant Day Care</li>
                <li className='small-item'>Rent Plants</li>
                <li className='small-item'>Plants & Pots</li>
                <li className='small-item'>Gardening Tools</li>
             </ul>
        </div>

        <div className='email-container'>
            <h1 className='head1'>USEFUL LINKS</h1>
             <ul className='footer-small-items'>
                <li className='small-item'>My Account</li>
                <li className='small-item'>Orders & Returns</li>
                <li className='small-item'>Track Order</li>
                <li className='small-item'>Terms & Conditions</li>
                <li className='small-item'>Privacy Policy</li>
                <li className='small-item'>Return, Refund & Replacement Policy</li>
             </ul>
        </div>

        <div className='email-container'>
            <h1 className='head1'>GET IN TOUCH</h1>
             <ul className='footer-small-items'>
                <li className='small-item'>Address: F-262, First Floor, Sushant Lok Phase-III, 
                    Sector-57, Gurgaon, Haryana, India 122003 
                    </li>
                <li className='small-item'>Call: +919958287272</li>
                <li className='small-item'> Email: care@chaperoneplants.com</li>
               
             </ul>
        </div>
        
        </div>
        <div className='plants-pots-container'>
        <h1 className='nursery-text'>CHAPERONE</h1>
            <p className='plant-pot-para'>
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum 
            quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius.
             Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
            </p>
        </div>

        <div className='plants-pots-container'>
        <h1 className='nursery-text'>Follow us on</h1>
            <ul className='social-icons'>
                <li><CiInstagram size={20} /></li>
                <li><FaFacebook size={20}  /></li>
                <li><FaSquareThreads size={20}  /></li>
                <li><FaYoutube size={20}  /></li>
                <li><FaLinkedin size={20}  /></li>
            </ul>
        </div>
        <p className='last-foot'>© 2023, chaperone.com All rights reserved.</p>
       </div>
      
    </div>
  )
}

export default Footer