import React from "react";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      {/* footer */}
      <section className="w3l-footer-29-main">
        <div className="footer-29 py-5">
          <div className="container py-md-4">
            <div className="row footer-top-29">
              <div className="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-1 pr-lg-5">
                <h6 className="footer-title-29">Contact Info </h6>
                <p>
                  Address :madina marrakech marocco.
                </p>
                <p className="my-2">
                  Phone : <a href="tel:+(212) 607279128">+(212)607279128</a>
                </p>
                <p>
                  Email : <a href="tourandtravelmorocco@gmail.com">tourandtravelmorocco@gmail.com</a>
                </p>
                <div className="main-social-footer-29 mt-4">
                  <a href="#facebook" className="facebook">
                    <span className="fa fa-facebook"></span>
                  </a>
                  <a href="#twitter" className="twitter">
                    <span className="fa fa-twitter"></span>
                  </a>
                  <a href="#instagram" className="instagram">
                    <span className="fa fa-instagram"></span>
                  </a>
                  <a href="#linkedin" className="linkedin">
                    <span className="fa fa-linkedin"></span>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-5 col-6 footer-list-29 footer-2 mt-sm-0 mt-5">
                <ul>
                  <h6 className="footer-title-29">Company</h6>
                  <li>
                    <a href="/about">About company</a>
                  </li>
                 
                 
                  <li>
                    <a href="courses.html">Online Courses</a>
                  </li>
                  <li>
                    <a href="/contact">Get in touch</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-3 mt-lg-0 mt-5">
                <h6 className="footer-title-29">Programs</h6>
                <ul>
                  <li>
                    <a href="#traning">Training Center</a>
                  </li>
                  <li>
                    <a href="#documentation">Documentation</a>
                  </li>
                  <li>
                    <a href="#release">Release Status</a>
                  </li>
                  <li>
                    <a href="#customers"> Customers</a>
                  </li>
                  <li>
                    <a href="#helpcenter"> Help Center</a>
                  </li>
                </ul>
              </div>
          
            </div>
          </div>
        </div>
        {/* copyright */}
        <section className="w3l-copyright text-center">
          <div className="container">
     
            <p className="copy-footer-29">
              © 2023 Tour And Travel Morocco. All rights reserved. Design by
              <a rel="noreferrer" href="/" target="_blank">
                JADev
              </a>
            </p>
          </div>

          {/* move top */}
          <button onClick={topFunction} id="movetop" title="Go to top">
            &#10548;
          </button>

          {/* /move top */}
        </section>
        {/* //copyright */}
      </section>
      {/* //footer */}
    </div>
  );
}

export default Footer;
