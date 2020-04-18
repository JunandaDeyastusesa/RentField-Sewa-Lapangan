import React,{Component} from "react";
import axios from "axios";
import $ from "jquery";
import Modal from "../component/Modal";
import Toast from "../component/Toast";

class Sewa extends Component {
  constructor() {
    super();
    this.state = {
        sewa: [],
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

    if(!localStorage.getItem("Token")){
    
      window.location = "/login";
    }
  }

    bind = (event) => {
      this.setState({[event.target.name] : event.target.value});
    }

    bindImage = (event) => {
      this.setState({gambar: event.target.files[0]})
    }

    Add = () => {
      $("#modal_sewa").modal("show");
      this.setState({
        action: "insert",
        // id: "",
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
      let url = "http://localhost/lapangan/public/sewa";
      axios.get(url)
      .then(response => {
        this.setState({sewa: response.data.sewa});
        console.log(this.setState);
        // $("#loading").toast("hide");
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

        Used = (id) => {
          if(window.confirm("Apakah anda yakin menyewakan lapangan ini?")){
          let url = "http://localhost/lapangan/public/sewa/used/" + id;
          axios.post(url)
          .then(res => {
            this.getSewa()
          })
          .catch(error => {
            console.log(error);
          });
        }
      }

      Done = (id) => {
        if(window.confirm("Apakah anda yakin menyelesaikan lapangan ini?")){
        let url = "http://localhost/lapangan/public/sewa/done/" + id;
        axios.post(url)
        .then(res => {
          this.getSewa()
        })
        .catch(error => {
          console.log(error);
        });
      }
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
      this.getLap();      
      this.getMember();      
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

    search = (event) => {
        if(event.keyCode === 13) {
          // $("#loading").toast("show");
          let url = "http://localhost/lapangan/public/sewa/find";
          let form = new FormData();
          form.append("find", this.state.find);
          axios.post(url, form)
          .then(response => {
            // $("#loading").toast("hide");
            this.setState({sewa: response.data.sewa});
          })
          .catch(error => {
            console.log(error);
          });
        }
      }

    render(){
      const { users } = this.state;
      return(
        <div className="container">
          <div className=" mt-5">
            {/* header card */}
            <div className="#">
              <div className="row">
                <div className="col">
                  <h2 className="#" style={{fontWeight:"700", textAlign:"center", fontSize:"40px"}} >Data Sewa</h2>
                </div>
              </div>
              <div className="col-sm-3" style={{textAlign:"center"}}>
                  <input type="text" className="form-control" name="find"
                    onChange={this.bind} value={this.state.find} onKeyUp={this.search}
                    placeholder="Pencarian..." />
                </div>
            </div>
            {/* content card */}
            <div className="card-body">
              {/* <Toast id="message" autohide="true" title="Informasi">
                {this.state.message}
              </Toast> */}
              {/* <Toast id="loading" autohide="false" title="Informasi">
                <span className="fa fa-spin fa-spinner"></span> Sedang Memuat
              </Toast> */}
              <table className="table table-hover table-striped ">
                <thead>
                  <tr>
                    <th>ID Sewa</th>
                    <th>ID Lapangan</th>
                    <th>ID User</th>
                    <th>Lapangan</th>
                    <th>Nama</th>
                    <th>Tgl Pesan</th>
                    <th>Mulai</th>
                    <th>Selesai</th>
                    <th>Durasi</th>
                    <th>Biaya</th>
                    <th>Status</th>
                    <th>Action</th>
                    <th>U/D</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.sewa.map((item) => {
                    return(
                      <tr>
                        <td>{item.id_sewa}</td>
                        <td>{item.id_lapangan}</td>
                        <td>{item.id_user}</td>
                        <td>{item.nama_lapangan}</td>
                        <td>{item.username}</td>
                        <td>{item.tgl_book}</td>
                        <td>{item.wkt_mulai}</td>
                        <td>{item.wkt_selesai}</td>
                        <td>{item.durasi}</td>
                        <td>{item.biaya}</td>
                        <td>{item.status}</td>
                        {/* <td><img src={'http://localhost/lapangan/public/images/' + item.gambar} style={{width:"150px", height:"150px"}}/></td> */}
                        {/* <td style={{fontWeight:"700", color:"red"}}>KOSONG</td>  */}
                        <td>
                          <button className="m-1 btn btn-sm btn-outline-dark" onClick={() => this.Edit(item)}>
                            <span className="fa fa-edit"></span>
                          </button>
                          <button className="m-1 btn btn-sm btn-outline-danger" onClick={() => this.Drop(item.id_sewa)}>
                            <span className="fa fa-trash"></span>
                          </button>
                        </td>
                        <td>
                          <button className="m-1 btn btn-sm btn-outline-info" onClick={() => this.Used(item.id_sewa)}>
                            <span className="#">U</span>
                          </button>
                          <button className="m-1 btn btn-sm btn-outline-warning" onClick={() => this.Done(item.id_sewa)}>
                            <span className="#">D</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* tombol tambah */}
              <center>
                <button className="btn btn-outline-dark my-2" onClick={this.Add}>
                    <span className="#" ></span> Tambah Data
                </button>
              </center>

              {/* form modal Barang*/}
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
            </div>
          </div>
        </div>
      );
    }}
export default Sewa;
