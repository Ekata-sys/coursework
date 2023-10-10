import React from 'react'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
   <>
     <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Contact <span>Us</span></h2>
                </div>
            </div>
            {/* <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.434515166926!2d145.26873361532316!3d-37.96698777972492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad617acb9c7fb07%3A0xeb1244ad3d15dd2e!2s2%20Peebles%20St%2C%20Endeavour%20Hills%20VIC%203802%2C%20Australia!5e0!3m2!1sen!2sin!4v1688473650118!5m2!1sen!2sin"
                    width="600" height="450" style={{border: '0'}}  allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> */}
            <div className="container">
                <div className="row gy-5 gx-lg-5">
                    <div className="col-lg-4">
                        <div className="info">
                            <h4>Get In Touch</h4>
                            <p className="contctpara">We are a team of expert and experienced coursework writing
                                services, available 24/7 to assist students with their academic needs. Connect Now!</p>
                            <div className="info-item d-flex">
                                <i className="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <p className="contctpara"><strong>Location:</strong></p>
                                    <p className="contctpara">Peebles St, Endeavour Hills Victoria, PO Box: 3802,
                                        Australia</p>
                                </div>
                            </div>
                            <div className="info-item d-flex">
                                <i className="bi bi-envelope flex-shrink-0"></i>
                                <div>
                                    <p className="contctpara"><strong>Email:</strong></p>
                                    <p><a className="mail-to"
                                            href="mailto:help@courseworkhelp.com.au">help@courseworkhelp.com.au</a></p>
                                </div>
                            </div>
                            <div className="info-item d-flex">
                                <i className="bi bi-phone flex-shrink-0"></i>
                                <div>
                                    <p className="contctpara"><strong>Call:</strong></p>
                                    <p><a href="tel:+61488896118">+61 4888 96 118</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className='form d-flex justify-content-center pb-5 w-74 ps-0 ps-lg-5 ms-0 ms-lg-5'>
                <ContactForm/>
                <br/>
              </div>
                        {/* <form action="order_action.php" method="post"
                            className="php-email-form">
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name"
                                        placeholder="Your Name" required />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email"
                                        placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject"
                                    placeholder="Subject" required />
                            </div>
                            <div className="form-group mt-3">
                                <textarea type="text" className="form-control" name="message" placeholder="Message"
                                    required></textarea>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form> */}
                    </div>
                </div>
            </div>
        </section>
        
   </>
  )
}
