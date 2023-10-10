import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
    <footer id="footer" className="footer">
        <div className="footer-legal text-center">
            <div
                className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
                <div className="d-flex flex-column align-items-center align-items-lg-start">
                    <div className="copyright">@ Copyright. All Rights Reserved CourseworkHelp</div>
                    <div className="credits">
                    </div>
                </div>

                <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
                    <Link to="#" className="twitter"><i className="bi bi-twitter"></i></Link>
                    <Link to="#" className="facebook"><i className="bi bi-facebook"></i></Link>
                    <Link to="#" className="instagram"><i className="bi bi-instagram"></i></Link>
                    <Link to="#" className="pinterest"><i className="bi bi-pinterest"></i></Link>
                    <Link to="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
                </div>
            </div>
        </div>
    </footer>
    <Link to="#" className="scroll-top d-flex align-items-center justify-content-center"><i
            className="bi bi-arrow-up-short"></i></Link>

    {/* <div id="preloader"></div> */}
    </>
  )
}
