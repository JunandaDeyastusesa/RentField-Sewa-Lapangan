import React,{Component} from "react";
import axios from "axios";
import $ from "jquery";
import { Link } from 'react-router-dom';
import h1 from '../image/bg-reg.png';

var sectionStyle = {
  backgroundImage: "url (" + {h1} + ")"
};

class Register extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      id: "",
      username: "",
      email: "",
      password: "",
      created_at: "",
      updated_at: "",
      find: "",
      message: ""
    }
  }

    bind = (event) => {
      this.setState({[event.target.name] : event.target.value});
    }

    Save = (event) => {
      const { password, confirmpassword } = this.state;
      if (password !== confirmpassword) {
        alert("password don't match");
      } else {
      event.preventDefault();
      $("#modal_user").modal("hide");
      let url = "http://localhost/lapangan/public/register";
      let form = new FormData();
      form.append("action", this.state.action);
      form.append("id", this.state.id);
      form.append("username", this.state.username);
      form.append("email", this.state.email);
      form.append("password", this.state.password);
      form.append("role", this.state.role);
      axios.post(url, form)

      .then(response => {
        // $("#loading").toast("hide");
        this.setState({message: response.data.message});
        $("#message").toast("show");
        window.location="/Login"
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

    render(){
      return(
        <div >
        {/* <div className="card-body">
          <div className="container" style={{width: 24 + "rem", paddingTop : 6 + '%'}}>
            <h2 className="#" style={{textAlign: "center", fontWeight:"700"}}>Register User</h2>
          </div>
          <form onSubmit={this.Save}>
                <div style={{marginTop:"50px"}}>
                  <input type="text" className="form-control my-3" name="username"
                    value={this.state.username} onChange={this.bind} required placeholder="Masukkan Nama"  />
                    
                  <input type="text" className="form-control my-3" name="email"
                    value={this.state.email} onChange={this.bind} required placeholder="Masukkan Email" />
                    
                  <input type="text" className="form-control my-3" name="password"
                    value={this.state.password} onChange={this.bind} required placeholder="Masukkan Password" />
                  
                  <input type="text" className="form-control my-3" name="confirmpassword"
                    value={this.state.confirmpassword} onChange={this.bind} required placeholder="Confirm Password" />
                  <p>Sudah Punya Akun? 
                  <Link to="/Login">
                  Login
                  </Link></p>
                  <div style={{marginTop:"40px"}}>
                  <button className="mt-2 btn btn-block btn-sm btn-outline-success" type="submit" >
                    <span className="#"></span> Simpan
                </button>
                </div>
                </div>
                </form>
          </div> */}
          <div>
            <title>Login</title>
            <div className="limiter">
              <div className="container-login100">
                <div className="wrap-login100">
                  <form className="login100-form validate-form" style={{marginTop:"-110px"}} onSubmit={this.Save}>
                    <span className="login100-form-title p-b-43">Register to continue</span>

                    <div className="wrap-input100 validate-input" data-validate="Valid username is required: ex@abc.xyz">
                      <input className="input100" type="text" name="username" value={this.state.username} onChange={this.bind} placeholder="Username" />
                      <span className="focus-input100" />
                      {/* <span className="label-input100">Username</span> */}
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                      <input className="input100" type="text" name="email" value={this.state.email} onChange={this.bind} placeholder="Email" />
                      <span className="focus-input100" />
                      {/* <span className="label-input100">Email</span> */}
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                      <input className="input100" type="password" name="password" value={this.state.password} onChange={this.bind} placeholder="Password" />
                      <span className="focus-input100" />
                      {/* <span className="label-input100">Password</span> */}
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                      <input className="input100" type="password" name="confirmpassword" value={this.state.confirmpassword} onChange={this.bind} placeholder="Confirm Password" />
                      <span className="focus-input100" />
                      {/* <span className="label-input100">Confirm Password</span> */}
                    </div>

                    <div className="flex-sb-m w-full p-t-3 p-b-32">
                      <div className="contact100-form-checkbox">
                        <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                        <label className="label-checkbox100" htmlFor="ckb1">
                          Remember me
                        </label>
                      </div>
                      <div>
                        <a href="#" className="txt1">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <div className="container-login100-form-btn">
                      <button className="login100-form-btn" type="submit">Login</button>
                    </div>
                    <div className="text-center p-t-30 p-b-20">
                    <Link to="/Login">
                      <span className="txt2">or sign in using</span></Link>
                    </div>
                    <div className="login100-form-social flex-c-m">
                      <a href="#" className="login100-form-social-item flex-c-m bg1 m-r-5">
                        <i className="fa fa-facebook-f" aria-hidden="true" />
                      </a>
                      <a href="#" className="login100-form-social-item flex-c-m bg3 m-r-5">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                    </div>
                  </form>
                  <div className="login100-more"> 
                    <section style={ sectionStyle }>
                      <img src={h1} />
                    </section>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>


      );
    }
}
export default Register;
