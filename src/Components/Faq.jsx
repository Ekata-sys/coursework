import React from 'react'

export default function Faq() {
  return (
    <>
      <section id="faq" className="faq">
      <div className="container-fluid aos-init aos-animate" data-aos="fade-up">

                <div className="row gy-4">
                    <div className="col d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                        <div className="content px-xl-5 section-header">
                            <h2 className="text-center">Frequently Asked <span>Questions</span></h2>
                         
                        </div>
                        <div className="accordion accordion-flush px-xl-5" id="faqlist">

                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-content-1">
                                        <i className="bi bi-question-circle question-icon"></i>What Do You Mean By
                                        Coursework Writing Services?</button>
                                </h3>
                                <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body"><strong>Coursework writing services</strong> are
                                        referred to as the services that provide you with aid in order to draft
                                        professional academic writings as per the requirement of your professors. The
                                        service contains knowledgeable subject matter experts that can help you draft an
                                        impeccable assignment even if you have few details to explain!</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-content-2">
                                        <i className="bi bi-question-circle question-icon"></i>Where Can I Get Help With My
                                        Coursework?</button>
                                </h3>
                                <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">There are a number of <strong>coursework help</strong>
                                        services out there but, if you ask us for the best one then, there is nothing
                                        better than choosing us. The reason we are saying this is because we believe in
                                        providing quality work to students in trouble. So, it doesn’t matter why you are
                                        facing a problem with your assignment; we will always be there to help you
                                        without putting up too many questions.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-content-3">
                                        <i className="bi bi-question-circle question-icon"></i>How Your Experts Can Complete
                                        My Coursework For Me?</button>
                                </h3>
                                <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body"><strong>Coursework help</strong> is one of the most
                                        prominent services students love to hire these days. Our services dedicate an
                                        expert subject writer for your coursework that focuses on collecting the latest
                                        facts, adding in-depth research and preparing an assignment with proper format
                                        and structure.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-content-4">
                                        <i className="bi bi-question-circle question-icon"></i>How Much Will It Cost Me To
                                        Get Coursework Help?</button>
                                </h3>
                                <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                        <i className="bi bi-question-circle question-icon"></i>If you are worried about how
                                        much it will cost you to get <strong>coursework help</strong>, then there is
                                        nothing to worry about. Our services will provide you with quality services with
                                        the right format, referencing and structure at a very affordable price. You can
                                        contact us at the details mentioned below in order to know more about pricing.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </>
  )
}

