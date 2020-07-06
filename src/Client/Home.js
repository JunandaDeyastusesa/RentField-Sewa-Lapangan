import React,{Component} from "react";
import {Link} from "react-router-dom";
import bg1 from '../image/bg1.jpg';
import bg2 from '../image/bg2.jpg';
import bg3 from '../image/bg3.jpg';
import h1 from '../image/lap.jfif';
// import Slide2 from '../image/Slide2.jpg';
import axios from "axios";
import $ from "jquery";
import Modal from "../component/Modal";
import Toast from "../component/Toast";

class Home extends Component {

    render(){
      return(
      <div>
        {/* halo */}
        {/* <div className="overlay-gradient" style={{ textAlign:"center"}}>
          <img src={bg1} className="img-fluid" alt="Responsive image" />
          <h2 style={{fontWeight:"700", fontSize:"40px", marginTop:"-330px", color:"white"}} >RentField</h2>
          <p style={{color:"white", fontWeight:"500"}}>Ayo Sewa Lapangan Dengan Mudah disini</p>
          <button className="btn btn-md btn-outline-light">
            Sewa!
          </button>
        </div> */}
        <div  id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={bg1} className="d-block w-100" alt="Responsive image" />
              <div style={{marginBottom:"250px", textAlign:"center"}}>
                <h2 style={{fontWeight:"700", fontSize:"40px", marginTop:"-310px", color:"white"}} >RentField</h2>
                <p style={{color:"white", fontWeight:"500"}}>Ayo Sewa Lapangan Dengan Mudah disini</p>
                <button className="btn btn-md btn-outline-light">
                  <Link className="nav-link" to="/SewaC" style={{color:"black"}}>Sewa!</Link>
                 
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={bg2} className="d-block w-100" alt="Responsive image" />
              <div style={{marginBottom:"250px", textAlign:"center"}}>
                <h2 style={{fontWeight:"700", fontSize:"40px", marginTop:"-310px", color:"white"}} >RentField</h2>
                <p style={{color:"white", fontWeight:"500"}}>Dapatkan Harga Murah Hanya disini</p>
                <button className="btn btn-md btn-outline-light">
                <Link className="nav-link" to="/SewaC" style={{color:"black"}}>Sewa!</Link>

                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={bg3} className="d-block w-100" alt="Responsive image" />
              <div style={{marginBottom:"250px", textAlign:"center"}}>
                <h2 style={{fontWeight:"700", fontSize:"40px", marginTop:"-310px", color:"white"}} >RentField</h2>
                <p style={{color:"white", fontWeight:"500"}}>Tunggu Apa Lagi Buruan Sewa dan Olahrasa Bersama Teman disini</p>
                <button className="btn btn-md btn-outline-light">
                <Link className="nav-link" to="/SewaC" style={{color:"black"}}>Sewa!</Link>

                </button>
              </div>
            </div>
            
          </div>
          <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">p</span>
          </a>
          
          <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="container" style={{marginTop:"20px", marginBottom:"100px"}}>
          <div className="site-section">
            <div style={{ marginBottom:"50px"}}>
              <h1 style={{fontWeight:"700", textAlign:"center", color:"#020074"}}>LAPANGAN</h1>
              <p style={{fontWeight:"500", textAlign:"center"}}>Berikut ini adalah beberapa Lapangan Futsal yang bisa Anda Sewa</p>
              <center> <hr size="10px" color="black" Width="40%" /></center>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img src={h1} alt="Responsive image" className="img-responsive img-rounded" style={{maxWidth:"600px"}}/>
              </div>
              <div className="col-md-1" />
              <div className="col-md-5">
                <h2 style={{fontWeight:"400"}}>Lapangan Futsal A</h2>
                <p style={{fontWeight:"300"}}>
                  Lapangan ini memiliki panjang 25 meter dan lebar 15 meter.
                  Lapangan ini dilengkapi fasilitas papan skor, 1 bola futsal,
                  dan juga lantai lapangan berbahan Interlock.
                </p>
                <p>
                  <a href="#" className="btn btn-sm- btn-outline-primary">
                    IDR.100000
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{marginTop:"80px", marginBottom:"40px"}}>
          <div className="site-section">
            <div className="row">
              <div className="col-md-5">
                  <h2 style={{fontWeight:"400"}}>Lapangan Futsal B</h2>
                  <p style={{fontWeight:"300"}}>
                  Lapangan ini memiliki panjang 25 meter dan lebar 15 meter.
                  Lapangan ini dilengkapi fasilitas papan skor, 1 bola futsal,
                  dan juga lantai lapangan berbahan Rumput Syntetis.
                  </p>
                  <p>
                    <a href="#" className="btn btn-sm- btn-outline-primary">
                    IDR.200000
                      
                    </a>
                  </p>
                </div>
              <div className="col-md-1" />
              <div className="col-md-6">
                <img src={h1} alt="image Responsive image" className="img-responsive img-rounded" style={{maxWidth:"530px"}}/>
              </div>
            </div><br /><br /><br />
            <hr size="12px" color="#828282"  />
          </div>
        </div>

        <div className="container">
          <h1 style={{fontWeight:"700", textAlign:"center", color:"#020074"}}>CARA SEWA</h1>
          <p style={{fontWeight:"500", textAlign:"center", color:"#4B4B4B"}}>Berikut ini adalah Cara-cara penyewaan Lapangan</p>
          <center><hr size="10px" color="black" Width="35%" /></center>
          <div style={{marginLeft:"100px", marginTop:"40px", marginBottom:"100px"}}>
          <li>Daftar jika belum punya aku, jika sudah maka login.</li>
          <li>Pilih Lapangan yang akan di sewa.</li>
          <li>Atur waktu kapan ingin menggunakan Lapangan tersebut.</li>
          <li>Konfirmasi pembayaran.</li>
          </div>
        </div>

      </div>
      );
    }
}
export default Home;




