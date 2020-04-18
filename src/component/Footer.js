import React, {Component} from 'react';
import {Link} from "react-router-dom";
class Footer extends Component {
  
  render() {
    return (
        <div>
            <footer className="page-footer font-small color-dark" style={{ backgroundColor: "#17202A", color:"white"}}>
            <div style={{ backgroundColor: "#6351ce" }}>
                <div className="container">
                {/* Grid row*/}
                <div className="row py-4 d-flex align-items-center">
                    {/* Grid column */}
                    <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                    <h6 className="mb-0">Get connected with My Social Media!</h6>
                    </div>
                    <div className="col-md-6 col-lg-7 text-center text-md-right">
                    {/* Facebook */}
                    <a className="fb-ic">
                        <i className="fa fa-facebook-f white-text mr-4"> </i>
                    </a>
                    {/* Twitter */}
                    <a className="tw-ic">
                        <i className="fa fa-twitter white-text mr-4"> </i>
                    </a>
                    {/*Instagram*/}
                    <a className="ins-ic">
                        <i className="fa fa-instagram white-text"> </i>
                    </a>
                    </div>
                    {/* Grid column */}
                </div>
                {/* Grid row*/}
                </div>
            </div>
            {/* Footer Links */}
            <div className="container text-center text-md-left mt-5">
                {/* Grid row */}
                <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-5 col-xl-3 mx-auto mb-5">
                    {/* Content */}
                    <h6 className="text-uppercase font-weight-bold" >Map</h6>
                    <hr
                    className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
                    <div className="z-depth-1-half map-container-5" style={{ height:"1000" }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15804.855636048971!2d112.658958!3d-7.
                    97683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf6c889ac7452dc3a!2sSMK%20Telkom%20Malang!5e0!3m2!1sid!
                    2sid!4v1585885181513!5m2!1sid!2sid" 
                    frameBorder={0} style={{ border: 0 }} allowFullScreen/>
                </div>
            </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase font-weight-bold">About ME</h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60" }}/>
                    <p>
                    <a>Jadi pada aplikasi ini kalian bisa menyewa lapangan tanpa perlu datang langsung ke lokasi.</a><br /><br />
                    <a>Jadi tunggu apa lagi, Ayo buruan sewa Lapangan di RentField.</a>
                    </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase font-weight-bold">Contact</h6>
                    <hr
                    className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60 }}
                    />
                    <p>
                    <i className="fa fa-home mr-3" /> Malang City
                    </p>
                    <p>
                    <i className="fa fa-envelope mr-3" /> info@rentfield.com
                    </p>
                    <p>
                    <i className="fa fa-phone mr-3" /> +62 89 244 357 998
                    </p>
                </div>
                {/* Grid column */}
                </div>
                {/* Grid row */}
            </div>
            {/* Footer Links */}
            {/* Copyright */}
            <div className="footer-copyright text-center py-3" style={{backgroundColor:"#0E1319"}}>
                <a>RentField</a>
            </div>
            {/* Copyright */}
            </footer>

        </div>
      
    );
  }
}
export default Footer;
