import React,{Component} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Toast from "../component/Toast";
import $ from "jquery";
import h1 from '../image/bg5-04.png';

var sectionStyle = {
  // maxwidht: "10%",
  // height: "300px",
  backgroundImage: "url (" + {h1} + ")"
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      message: ""
    }
  }

  bind = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  Login = (event) => {
    event.preventDefault();
    let url = "http://localhost/lapangan/public/login";
    let form = new FormData();
    form.append("username", this.state.username);
    form.append("password", this.state.password);
    axios.post(url, form)
    .then(response => {
      let logged = response.data.status;
      let role = response.data.role;
      if (logged) {

        if(role === "admin"){
          window.location = "/Member";
        }else{
          window.location = "/";

        }

        this.setState({message: "Login Berhasil"});
        //menyimpan data token pada local storage
        localStorage.setItem("Token", response.data.token);
        //menyimpan data login user ke local storage
        localStorage.setItem("id", JSON.stringify(response.data.users.id));
        //direct ke halaman data siswa
        localStorage.setItem("role", response.data.role);
        
        
      } else {
        this.setState({message: "Login Gagal"});
      }
      $("#message").toast("show");
    })
    .catch(error => {
      console.log(error);
    })
  }

  render(){
    return(
      <div >
        {/* <div className="card-body">
          <div className="# ">
            <h2 className="#" style={{textAlign: "center"}}>Login User</h2>
          </div>
          <div className="card-body">
            <Toast id="message" autohide="false" title="informasi">
            {this.state.message}
            </Toast>
            <form onSubmit={this.Login}>

              <input type="text" className="form-control my-3" name="username"
                value={this.state.username} onChange={this.bind}
                required placeholder="Masukkan Username" />

              <input type="password" className="form-control my-4" name="password"
                value={this.state.password} onChange={this.bind}
                required placeholder="Masukkan Password" />
              <p>Belum Punya Akun?
              <Link to="/Register">
               Register
              </Link>
              </p>
                
              <button className="mt-2 btn btn-block btn-success" type="submit">
                <span className="#"></span> Login
                </button>
              </form>
            </div>
          </div> */}
          {/* <Toast id="message" autohide="false" title="informasi">
            {this.state.message}
            </Toast> */}
          <div>
            <title>Login</title>
            <div className="limiter">
              <div className="container-login100">
                <div className="wrap-login100">
                  <form onSubmit={this.Login} className="login100-form validate-form" style={{marginTop:"-110px"}}>
                    <span className="login100-form-title p-b-43">Login to continue</span>

                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                      <input className="input100" type="text" name="username" value={this.state.username} onChange={this.bind} placeholder="Email" />
                      <span className="focus-input100" />
                      {/* <span className="label-input100" >Email</span> */}
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                      <input className="input100" type="password" name="password" value={this.state.password} onChange={this.bind} placeholder="Password" />
                      <span className="focus-input100" />
                      {/* <span className="label-input100" >Password</span> */}
                    </div>
                    
                    <div className="flex-sb-m w-full p-t-3 p-b-32">
                      <div className="contact100-form-checkbox">
                        <input
                          className="input-checkbox100"
                          id="ckb1"
                          type="checkbox"
                          name="remember-me"
                        />
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
                    <Link to="/Register">
                      <span className="txt2">or sign up using</span></Link>
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
export default Login;
