import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function CourseworkhelpServices() {
  const options = {
    loop: true,
    autoplay: true,
    dots: false,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            margin:10
        },
        600: {
            items: 2,
            margin:10
        },
        1000: {
            items: 6,
            margin:10
        },
        1200:{
            margin: 40,
            items: 6,
        }
    }
};

  return (
    
    <>
     <section id="features" className="features">
            <div className="section-header">
                <h2>Our Diversified <span>Coursework Help Services</span></h2>
                <p>To select the <strong>coursework writing service</strong> of your choice, have a look at what our
                    coursework writers can provide you with</p>
            </div>
            
            <div className="container aos-init aos-animate" data-aos="fade-up">
                <ul className="review nav nav-tabs row gy-4 d-flex">
                <OwlCarousel className='owl-theme' {...options}>
                    <li className="nav-item">
                        <a className="nav-link show" data-bs-toggle="tab" href="#tab-1">
                            <i className="bi bi-binoculars color-cyan"></i>
                            <h4>Java Coursework Help</h4>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                            <i className="bi bi-box-seam color-indigo"></i>
                            <h4>Statistics Coursework Help</h4>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                            <i className="bi bi-brightness-high color-teal"></i>
                            <h4>Marketing Coursework Help</h4>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                            <i className="bi bi-command color-red"></i>
                            <h4>Chemistry Coursework Help</h4>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
                            <i className="bi bi-easel color-blue"></i>
                            <h4>Business Coursework Help</h4>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-6">
                            <i className="bi bi-map color-orange"></i>
                            <h4>Law <br />Coursework Help</h4>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-7">
                            <i className="bi bi-map color-orange"></i>
                            <h4>Finance Coursework Help</h4>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-8">
                            <i className="bi bi-map color-orange"></i>
                            <h4>Maths Coursework Help</h4>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-9">
                            <i className="bi bi-map color-orange"></i>
                            <h4>GCSE Coursework Help</h4>
                        </a>
                    </li>
                    </OwlCarousel>
                </ul>
               
                <div className="tab-content">
                    <div className="tab-pane show" id="tab-1">
                        <div className="row gy-4">
                            <div className="col-lg-8 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                                <h3>Java Coursework Help</h3>
                                <p><strong>Need help with java coursework</strong>? Our <strong>Java coursework
                                        help</strong> experts are right here to cater to all your programming and
                                    computing platform help needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tab-2">
                        <div className="row gy-4">
                            <div className="col-lg-8 order-2 order-lg-1">
                                <h3>Statistics Coursework Help</h3>
                                <p>Facing a problem collecting large quantities of data and representing it in an
                                    organised form in order to provide the best coursework assignment? Our
                                    <strong>coursework help</strong> experts can help you!</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tab-3">
                        <div className="row gy-4">
                            <div className="col-lg-8 order-2 order-lg-1">
                                <h3>Marketing Coursework Help</h3>
                                <p>Marketing is all about putting a better picture of an individual or organisation in
                                    order to gain more customers, and if you are facing a challenge dealing with the
                                    concepts of the same, our marketing coursework help is right here at your service!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tab-4">
                        <div className="row gy-4">
                            <div className="col-lg-8 order-2 order-lg-1">
                                <h3>Chemistry Coursework Help</h3>
                                <p>Chemistry is the study of chemicals and requires a student to understand the formulas
                                    before implementing them into a coursework assignment. If you are new to this and
                                    facing challenges, then your answer has to be our <strong>chemistry coursework
                                        writing service</strong>!</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tab-5">
                        <div className="row gy-4">
                            <div className="col-lg-8 order-2 order-lg-1">
                                <h3>Business Coursework Help</h3>
                                <p>Searching for the best coursework help service to deal with your business subject?
                                    Well, Our subject matter experts can provide you with the best <strong>business
                                        coursework help</strong> and that too at affordable prices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tab-6">
                        <div className="row gy-4">
                            <div className="col-lg-8 order-2 order-lg-1">
                                <h3>Law Coursework Help</h3>
                                <p>Law is all about memorising the rules and regulations applied in a particular
                                    country, but if you think this is not something you want to work on, then our
                                    <strong>law coursework help</strong> has got you covered!</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tab-7">
                        <div className="row gy-4">
                            <div className="col-lg-8 order-2 order-lg-1">
                                <h3>Finance Coursework Help</h3>
                                <p>Searching for the best <strong>finance coursework help</strong> experts that can help
                                    you deal with all the balance sheet troubles? Well, we have got the best experts in
                                    the country. All you need to do is make an order!</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tab-8">
                        <div className="row gy-4">
                            <div className="col-lg-8 order-2 order-lg-1">
                                <h3>Maths Coursework Help</h3>
                                <p>Not everyone can be an excellent maths student, and we understand that. If you have
                                    to pursue maths as a major in college and are looking for someone to provide you
                                    <strong>help with coursework</strong> for the same, then choose our experts to feel
                                    at ease!</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tab-9">
                        <div className="row gy-4">
                            <div className="col-lg-8 order-2 order-lg-1">
                                <h3>GCSE Coursework Help</h3>
                                <p>Want to achieve an A+ grade in your GCSE assignments? Take the help of our
                                    <strong>GCSE coursework help</strong> and receive the experiance expertise with
                                    proper examples, format and template structure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
