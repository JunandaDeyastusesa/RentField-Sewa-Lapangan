import React,{Component} from "react";
import axios from "axios";
import $ from "jquery";
import Modal from "../component/Modal";
import Toast from "../component/Toast";

class Lapangan extends Component {
  constructor() {
    super();
    this.state = {
        lapangan: [],
        id: "",
        nama: "",
        harga: "",
        gambar: null,
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
      $("#modal_lap").modal("show");
      this.setState({
        action: "insert",
        id: "",
        nama: "",
        harga: "",
        gambar: null
      });
    }

    Edit = (item) => {
      $("#modal_lap").modal("show");
      this.setState({
        action: "update",
        id: item.id,
        nama: item.nama,
        harga: item.harga,
        gambar: item.gambar
      });
    }

    getLap = () => {
      // $("#loading").toast("show");
      let url = "http://localhost/lapangan/public/lapangan";
      axios.get(url)
      .then(response => {
        this.setState({lapangan: response.data.lapangan});
        console.log(this.setState);
        // $("#loading").toast("hide");
      })
      .catch(error => {
        console.log(error);
      });
    }

    Drop = (id) => {
      if(window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
        // $("#loading").toast("show");
        let url = "http://localhost/lapangan/public/lapangan/drop/" + id;
        axios.delete(url)
        .then(response => {
          $("#loading").toast("hide");
          this.setState({message: response.data.message});
          $("#message").toast("show");
          this.getLap();
        })
        .catch(error => {
          console.log(error);
        });
      }
    }

    componentDidMount = () => {
      this.getLap();      
    }

    Save = (event) => {
      event.preventDefault();
      // $("#loading").toast("show");      
      $("#modal_lap").modal("hide");
      let url = "http://localhost/lapangan/public/lapangan/save";
      let form = new FormData();
      form.append("action", this.state.action);
      form.append("id", this.state.id);
      form.append("nama", this.state.nama);
      form.append("harga", this.state.harga);
      form.append("gambar", this.state.gambar);
    //   if (form.has("gambar")){
    //   form.append("gambar", this.state.gambar, this.state.gambar.name);
    //   }
      axios.post(url, form)
      .then(response => {
        // $("#loading").toast("hide");
        // this.setState({message: response.data});
        // $("#message").toast("show");
        this.getLap();
      })
      .catch(error => {
        console.log(error);
      });
    }

    search = (event) => {
        if(event.keyCode === 13) {
          // $("#loading").toast("show");
          let url = "http://localhost/lapangan/public/lapangan/find";
          let form = new FormData();
          form.append("find", this.state.find);
          axios.post(url, form)
          .then(response => {
            $("#loading").toast("hide");
            this.setState({lapangan: response.data.lapangan});
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
                  <h2 className="#" style={{fontWeight:"700", textAlign:"center", fontSize:"40px"}} >Data Lapangan</h2>
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
              <Toast id="message" autohide="true" title="Informasi">
                {this.state.message}
              </Toast>
              <Toast id="loading" autohide="false" title="Informasi">
                <span className="fa fa-spin fa-spinner"></span> Sedang Memuat
              </Toast>
              <table className="table table-hover table-striped ">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Gambar</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.lapangan.map((item) => {
                    return(
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.nama}</td>
                        <td>{item.harga}</td>
                        <td><img src={'http://localhost/lapangan/public/images/' + item.gambar} style={{width:"150px", height:"150px"}}/></td>
                        {/* <td style={{fontWeight:"700", color:"red"}}>KOSONG</td>  */}
                        <td>
                          <button className="m-1 btn btn-sm btn-outline-dark" onClick={() => this.Edit(item)}>
                            <span className="fa fa-edit"></span>
                          </button>
                          <button className="m-1 btn btn-sm btn-outline-danger" onClick={() => this.Drop(item.id)}>
                            <span className="fa fa-trash"></span>
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
              <Modal id="modal_lap" title="Form Lapangan" bg_header="dark" text_header="white">
                <form onSubmit={this.Save}>
                  Nama
                  <input type="text" className="form-control" name="nama" value={this.state.nama} onChange={this.bind} required />
                  Harga
                  <input type="text" className="form-control" name="harga" value={this.state.harga} onChange={this.bind} required />
                  Image
                  <input type="file" className="form-control" name="gambar" onChange={this.bindImage} />

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
export default Lapangan;
