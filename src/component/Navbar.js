import React, {Component} from 'react';
import {Link} from "react-router-dom";
class Navbar extends Component {
  Logout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("id_user");
    localStorage.removeItem("role");
    window.location = "/"
  }
  
  render() {
    let role = localStorage.getItem("role");
    let auth = localStorage.getItem("Token");
    return (
          <div style={{backgroundColor:"#6351ce"}}>
            <nav className="navbar navbar-expand-lg navbar-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a style={{fontWeight:"700"}} className="navbar-brand" href="#">RentFiled</a>
              
              <div className="navbar-collapse collapse" id="menu">
          <ul className="navbar-nav">
            {/* {(auth)= "true" ? <li className="navbar-item"><Link className="nav-link" to="/Member">Member</Link></li> : "" }             */}
            { role === "admin" ? auth ? <li className="navbar-item "><Link className="nav-link" to="/Member">MEMBER</Link></li> : "" : "" }            
            { role === "admin" ? auth ? <li className="navbar-item "><Link className="nav-link" to="/Lapangan">LAPANGAN</Link></li> : "" : "" }       
            { role === "admin" ? auth ? <li className="navbar-item "><Link className="nav-link" to="/Sewa">SEWA</Link></li> : "" : "" }            
            

            { role === "admin" ? "" : <li className="navbar-item "><Link className="nav-link" to="/">HOME</Link></li> } 
            { role === "admin" ? "" : <li className="navbar-item "><Link className="nav-link" to="/Profil">PROFIL</Link></li> }            
            { role === "admin" ? "" : <li className="navbar-item "><Link className="nav-link" to="/SewaC">SEWA</Link></li> }            
          </ul>
        </div>
                <div className="form-inline my-2 my-lg-0">
                  <ul className="navbar-nav">
                    {!(auth) ? <li className="navbar-item"><Link className="nav-link" to="/login">login</Link></li> : 
                    <li className="navbar-item"><Link className="nav-link" onClick={this.Logout}>Logout</Link></li> }
                </ul>
                </div>
             
            </nav>
      </div>
      
    );
  }
}
export default Navbar;
