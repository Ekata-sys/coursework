import React, { useEffect } from 'react'
export default function Navbar() {

 

  useEffect(() => {
    const mobileNavToogle = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToogle) {
      mobileNavToogle.addEventListener('click', function(event) {
        event.preventDefault();
  
        document.querySelector('body').classList.toggle('mobile-nav-active');
  
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
      });
    }
  }, [])
  return (
   <>

<header id="header" className="header fixed-top" data-scrollto-offset="0">
<div className="container-fluid d-flex align-items-center justify-content-between">

<a href="https://courseworkhelp.com.au/" className="logo d-flex align-items-center scrollto me-auto me-lg-0">

<img src="assets/img/logo.webp" alt="coursework help" loading="lazy" /> 

</a>

<nav id="navbar" className="navbar">
<ul>

<li><a className="nav-link scrollto" href="/">Home</a></li>
<li><a className="nav-link scrollto" href="#about">About</a></li>
<li><a className="nav-link scrollto" href="#features">Services</a></li>
<li><a className="nav-link scrollto" href="#contact">Contact</a></li>
</ul>
<i className="bi bi-list mobile-nav-toggle d-none"></i>
</nav>


</div>
</header>
</>
  )
}
