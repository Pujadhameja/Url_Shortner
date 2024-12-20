"use client"
import React from 'react'
import Image from 'next/image'

const contact = () => {
  return (
    <div className='m-100 p-100'>
        <b>CONTACT US</b>
        <p>
       We are here to help! Whether you have a question, need support, or just want to share your feedback, we had love to hear from you. Connect with us through any of the following channels:</p>
       
        
   <h1><b>CONTACT US</b></h1>
    For any issues, troubleshooting, or questions about using our URL shortener, reach out to our support team:
    
    <li>Email: support@bitlink.com</li>
    
    <li>Phone: +1 (800) 123-4567</li>
    
    <li>Live Chat: Available on our website during business hours.</li>
    
    
    <h1><b>BUSINESS INQUIRIES</b></h1>
    <p>Interested in partnering with us or have a business proposal? Contact our business development team:</p>
    
    <b>Email: business@bitlink.com</b>
    
    <p>
    We value your input.If you have ideas or suggestions to improve our app, please let us know:</p>
    
    <b>Email: feedback@bitlink.com</b>
    
    
   <p> Stay up-to-date with the latest news, updates, and features by following us on social media:</p>
    
   <li> <b>Twitter</b> @bitLink</li>
    
    <li><b>Facebook:</b> facebook.com/BitLink</li>
    
   <li> <b>LinkedIn:</b> linkedin.com/company/BitLink</li>
   <div className=" flex justify-end sticky">
    <Image className="mix-blend-darken ml-auto" alt="an Image of a vector" src={"/contact.jpg"} width={500}  height={10000} />
         
        </div>
   
    
   
    
    </div>
  )
}

export default contact