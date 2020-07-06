import React,{Component} from "react";
import axios from "axios";
import $ from "jquery";
import Image from '../image/foto1.jpg';
import Modal from "../component/Modal";
import Toast from "../component/Toast";

class Profil extends Component {
  constructor() {
    super();
    this.state = {
        sewa: [],
        myOrder: [],
        member: [],
        lapangan: [],
        id: "",
        id_sewa: "",
        id_lapangan: "",
        nama_lapangan: "",
        id_user: "",
        username: "",
        tgl_book: "",
        wkt_mulai: "",
        wkt_selesai: "",
        durasi: "",
        harga: "",
        biaya: "",
        status: "",
        action: "",
        find: "",
        message: ""
    }

    // // jika tidak terdapat data token pada local storage
    if(!localStorage.getItem("Token")){
      // direct ke halaman login
//       window.location = "/login";
    }
  }

    bind = (event) => {
      this.setState({[event.target.name] : event.target.value});
    }

    bindImage = (event) => {
      this.setState({image: event.target.files[0]})
    }

    Add = () => {
      $("#modal_sewa").modal("show");
      this.setState({
        action: "insert",
        id: "",
        id_sewa: "",
        id_lapangan: "",
        id_user: "",
        tgl_book: "",
        wkt_mulai: "",
        wkt_selesai: ""
      });
    }

    Edit = (item) => {
      $("#modal_sewa").modal("show");
      this.setState({
        action: "update",
        id: item.id_sewa,
        id_lapangan: item.id_lapangan,
        id_user: item.id_user,
        tgl_book: item.tgl_book,
        wkt_mulai: item.wkt_mulai,
        wkt_selesai: item.wkt_selesai
      });
    }

    
    getSewa = () => {
        // $("#loading").toast("show");
        let id = JSON.parse(localStorage.getItem('id'))
        let url = "http://localhost/lapangan/public/myorder/" + id;
        axios.get(url)
        .then(response => {
            this.setState({sewa: response.data.sewa});
            $("#loading").toast("hide");
        })
        .catch(error => {
            console.log(error);
        });
    }

    getMember = () => {
      // $("#loading").toast("show");    
      let url = "http://localhost/lapangan/public/member";
      axios.get(url)
      .then(response => {
        this.setState({
          member: response.data.member,
          id_user: response.data.member.id
        });
        $("#loading").toast("hide");
      })
      .catch(error => {
        console.log(error);
      });
    }

    getLap = () => {
      // $("#loading").toast("show");    
      let url = "http://localhost/lapangan/public/lapangan";
      axios.get(url)
      .then(response => {
        this.setState({
          lapangan: response.data.lapangan,
          id_user: response.data.lapangan.id
        });
        $("#loading").toast("hide");
      })
      .catch(error => {
        console.log(error);
      });
    }

    Drop = (id) => {
      if(window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
        // $("#loading").toast("show");
        let url = "http://localhost/lapangan/public/sewa/drop/" + id;
        axios.delete(url)
        .then(response => {
          $("#loading").toast("hide");
          this.setState({message: response.data.message});
          $("#message").toast("show");
          this.getSewa();
        })
        .catch(error => {
          console.log(error);
        });
      }
    }

    componentDidMount = () => {
      this.getSewa();
      this.getMember();
      this.getLap();
    }

    Save = (event) => {
      event.preventDefault();
      // $("#loading").toast("show");      
      $("#modal_sewa").modal("hide");
      let url = "http://localhost/lapangan/public/sewa/save";
      let form = new FormData();
      form.append("action", this.state.action);
      form.append("id", this.state.id);
      // form.append("id", this.state.id);
      form.append("id_lapangan", this.state.id_lapangan);
      form.append("id_user", this.state.id_user);
      form.append("tgl_book", this.state.tgl_book);
      form.append("wkt_mulai", this.state.wkt_mulai);
      form.append("wkt_selesai", this.state.wkt_selesai);
    //   if (form.has("gambar")){
    //   form.append("gambar", this.state.gambar, this.state.gambar.name);
    //   }
      axios.post(url, form)
      .then(response => {
        // $("#loading").toast("hide");
        // this.setState({message: response.data});
        // $("#message").toast("show");
        this.getSewa();
      })
      .catch(error => {
        console.log(error);
      });
    }
    
    SavePwd = (event) => {
      event.preventDefault();
      // $("#loading").toast("show");      
      $("#modal_pwd").modal("hide");
      let url = "http://localhost/lapangan/public/myprofil/pwd";
      let form = new FormData();
      form.append("action", this.state.action);
      form.append("id", this.state.id);
      form.append("last_password", this.state.last_password);
      form.append("new_password", this.state.new_password);

      axios.post(url, form)
      .then(response => {
        // $("#loading").toast("hide");
        // this.setState({message: response.data});
        // $("#message").toast("show");
        this.getSewa();
      })
      .catch(error => {
        console.log(error);
      });
    }

    search = (event) => {
      if(event.keyCode === 13) {
        $("#loading").toast("show");
        let url = "http://localhost/eproduk/public/profiles";
        let form = new FormData();
        form.append("find", this.state.find);
        axios.post(url, form)
        .then(response => {
          $("#loading").toast("hide");
          this.setState({profiles: response.data.profiles});
        })
        .catch(error => {
          console.log(error);
        });
      }
    }

    render(){
      const { profil, data_pengiriman, item } = this.state;
      return(
        <div style={{backgroundColor:"#F5F5F5"}}>
          <div className="container" style={{marginLeft:"250px"}}>
            
            <button className="col-md-8 btn btn-lg btn-outline-primary" style={{marginTop:"30px"}} onClick={this.Add} >
              <span className="" style={{fontWeight:"700"}}>BOOKING</span>
            </button>
        <center>
          <div style={{ paddingTop: "4%" }}>
            
            <div className="#" style={{ maxwidth: "200px" }}>
              <div className="row no-gutters">
                <div className="col-md-8">
                  {this.state.sewa.map((item) => { 
                    return(
                    <div>
                  <div className="card" style={{marginBottom:"50px"}}>
                    
                  <h4 className="card card-title" style={{ fontWeight: "900", textAlign:"center", paddingTop:"10px", paddingBottom:"10px", backgroundColor:"#8A2BE2", color:"white" }}>{item.status}</h4>
                    <table class="table table-borderless" style={{marginBottom:"20px"}}>
                          <tbody>
                            <tr>
                              <td>
                                <tr>
                                  <td>ID Sewa</td>
                                  <td>: {item.id_sewa}</td>
                                </tr>
                                <tr>
                                  <td>Lapangan</td>
                                  <td>: {item.nama_lapangan}</td>
                                </tr>
                                <tr>
                                  <td>Nama</td>
                                  <td>: {item.username}</td>
                                </tr>
                                <tr>
                                  <td>Tanggal Book</td>
                                  <td>: {item.tgl_book}</td>
                                </tr>
                              </td>
                              <td>
                                <tr>
                                  <td>Waktu Mulai</td>
                                  <td>: {item.wkt_mulai}</td>
                                </tr>
                                <tr>
                                  <td>Waktu Selesai</td>
                                  <td>: {item.wkt_selesai}</td>
                                </tr>
                                <tr>
                                  <td>Durasi</td>
                                  <td>: {item.durasi}</td>
                                </tr>
                                <tr>
                                  <td>Biaya</td>
                                  <td>: {item.biaya}</td>
                                </tr>
                              </td>
                            </tr>
                            
                            <button className="m-1 btn btn-sm btn-outline-dark" onClick={() =>this.Edit(item)}>
                                <span className="fa fa-edit">Edit</span>
                            </button>
                            <button className="m-1 btn btn-sm btn-outline-danger" onClick={() =>this.Drop(item.id_sewa)}>
                                <span className="fa fa-cancle">Cancle</span>
                            </button>
                      </tbody>
                    </table>
                  </div>
                  </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          </center>

          <Modal id="modal_sewa" title="Form Sewa" bg_header="dark" text_header="white">
                <form onSubmit={this.Save}>

                <label htmlFor="state">Lapangan</label>                  
                    <select className="form-control" name="id_lapangan" value={this.state.id_lapangan} onChange={this.bind} required>
                      {this.state.lapangan.map((item) => {
                        return(
                            <option value={item.id}>{item.nama}</option>
                      )})}
                    </select>

                    <label htmlFor="state">User</label>                  
                    <select className="form-control" name="id_user" value={this.state.id_user} onChange={this.bind} required>
                        {this.state.member.map((item) => {
                            return(
                      <option value={item.id}>{item.username}</option>
                      )})}
                    </select>

                    {/* Lapangan */}
                    {/* <input type="int" className="form-control" name="id_lapangan" value={this.state.id_lapangan} onChange={this.bind} required /> */}
                    {/* User */}
                    {/* <input type="int" className="form-control" name="id_user" value={this.state.id_user} onChange={this.bind} required /> */}
                    Tgl Pesan
                    <input type="date" className="form-control" name="tgl_book" value={this.state.tgl_book} onChange={this.bind} required />
                    Mulai
                    <input type="time" className="form-control" name="wkt_mulai" value={this.state.wkt_mulai} onChange={this.bind} required />
                    Selesai
                    <input type="time" className="form-control" name="wkt_selesai" value={this.state.wkt_selesai} onChange={this.bind} required />

                  <button type="submit" className="btn btn-info pull-right m-2">
                    <span className="fa fa-check">Simpan</span>
                  </button>
                </form>
              </Modal>

              <Modal id="modal_pwd" title="Change Password" bg_header="secondary" text_header="white">
                <form onSubmit={this.SavePwd}>
                  Password Lama
                    <input type="text" className="form-control" name="last_password" value={this.state.last_password} onChange={this.bind} required />
                  Password Baru
                    <input type="text" className="form-control" name="new_password" value={this.state.new_password} onChange={this.bind} required />
                  
                  <button type="submit" className="btn btn-info pull-right m-2">
                    <span className="fa fa-check"></span> Simpan
                  </button>
                </form>
              </Modal>

          </div>
        </div>
      );

    }



}
export default Profil;
