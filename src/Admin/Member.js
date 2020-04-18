import React,{Component} from "react";
import axios from "axios";
import $ from "jquery";
import Modal from "../component/Modal";
import Toast from "../component/Toast";

class Member extends Component {
  constructor() {
    super();
    this.state = {
        member: [],
        id: "",
        username: "",
        email: "",
        password: "",
        role: "",
        first_name: "",
        last_name: "",
        gender: "",
        date_birth: "",
        image: null,
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
      this.setState({img_brg: event.target.files[0]})
    }

    Add = () => {
      
      $("#modal_member").modal("show");
      
      this.setState({
        action: "insert",
        id: "",
        username: "",
        email: "",
        password: "",
        role: "",
        first_name: "",
        last_name: "",
        gender: "",
        date_birth: "",
        no_hp: "",
        alamat: ""
      });
    }

    Edit = (item) => {
      
      $("#modal_member").modal("show");
     
      this.setState({
        action: "update",
        id: item.id,
        username: item.username,
        email: item.email,
        password: item.password,
        role: item.role,
        first_name: item.first_name,
        last_name: item.last_name,
        gender: item.gender,
        date_birth: item.date_birth,
        no_hp: item.no_hp,
        alamat: item.alamat
      });
    }

    getMember = () => {
      // $("#loading").toast("show");
      let url = "http://localhost/lapangan/public/member";
      axios.get(url)
      .then(response => {
        this.setState({member: response.data.member});
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
        let url = "http://localhost/lapangan/public/member/drop/" + id;
        axios.delete(url)
        .then(response => {
          $("#loading").toast("hide");
          this.setState({message: response.data.message});
          $("#message").toast("show");
          this.getMember();
        })
        .catch(error => {
          console.log(error);
        });
      }
    }

    componentDidMount = () => {
      this.getMember();      
    }

    Save = (event) => {
      event.preventDefault();
     
      // $("#loading").toast("show");
      
      $("#modal_member").modal("hide");
      let url = "http://localhost/lapangan/public/member/save";
      let form = new FormData();
      form.append("action", this.state.action);
      form.append("id", this.state.id);
      form.append("username", this.state.username);
      form.append("email", this.state.email);
      form.append("password", this.state.password);
      form.append("role", this.state.role);
      form.append("first_name", this.state.first_name);
      form.append("last_name", this.state.last_name);
      form.append("gender", this.state.gender);
      form.append("date_birth", this.state.date_birth);
      form.append("no_hp", this.state.no_hp);
      form.append("alamat", this.state.alamat);
      // if (form.has("img_brg")){
      // form.append("img_brg", this.state.img_brg, this.state.img_brg.name);
      // }

      axios.post(url, form)
      .then(response => {
        // $("#loading").toast("hide");
        // this.setState({message: response.data});
        // $("#message").toast("show");
        this.getMember();
      })
      .catch(error => {
        console.log(error);
      });
    }

    search = (event) => {
      if (event.keyCode === 13) {
          let url = "http://localhost/lapangan/public/member/find"

          let form = new FormData()
          form.append("searchBy", this.state.searchBy);
          form.append("find", this.state.find);
          axios.post(url, form)
              .then(response => {
                  this.setState({member: response.data.member})
              })
              .catch(error => {
                  console.log(error);
              })
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
                  <h2 className="#" style={{fontWeight:"700", textAlign:"center", fontSize:"40px"}} >Data Member</h2>
                </div>
              </div>
              <div className="col-sm-3" style={{textAlign:"center"}}>
                <select className="form-control" name="gender"  required>
                 
                  <option vvalue={this.state.searchBy} onChange={this.bind}></option>
        
                </select>
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
                    <th>Email</th>
                    <th>Password</th>
                    <th>Role</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>L/P</th>
                    <th>TTL</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.member.map((item) => {
                    return(
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        <td>{item.role}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.gender}</td>
                        <td>{item.date_birth}</td> 
                        <td style={{fontWeight:"700", color:"red"}}>KOSONG</td> 
                        
                        <td>
                          <button className="m-1 btn btn-sm btn-outline-dark" onClick={() => this.Edit(item)}>
                            <span className="fa fa-edit"></span>
                          </button>
                          <button className="m-1 btn btn-sm btn-outline-danger"
                            onClick={() => this.Drop(item.id)}>
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
              <button className="btn btn-outline-dark my-2"  onClick={this.Add}>
                <span className="#" ></span> Tambah Data
              </button>
              </center>

              {/* form modal Barang*/}
              <div style={{backgroundColor:"#6351ce"}}>
              <Modal id="modal_member" title="Form Member" bg_header="secondary" text_header="white">
                <form onSubmit={this.Save}>
                  Nama
                  <input type="text" className="form-control" name="username" value={this.state.username}
                    onChange={this.bind} required />
                  Email
                  <input type="text" className="form-control" name="email"
                    value={this.state.email} onChange={this.bind} required />
                  Password
                  <input type="text" className="form-control" name="password"
                    value={this.state.password} onChange={this.bind} required />
                  Role
                  <input type="text" className="form-control" name="role" 
                  value={this.state.role} onChange={this.bind} required />
                  Nama Awal
                  <input type="text" className="form-control" name="first_name" 
                  value={this.state.first_name} onChange={this.bind} required />
                  Last Name
                  <input type="text" className="form-control" name="last_name" 
                  value={this.state.last_name} onChange={this.bind} required />

                  <div className="form-group">
                    <label htmlFor="role">Jenis Kelamin</label>
                    <select className="form-control" name="gender" value={this.state.value} onChange={this.bind} required>
                      <option value="L">Laki laki</option>
                      <option value="P">Perempuan</option>
                    </select>
                  </div>

                  TTL
                  <input type="date" className="form-control" name="date_birth" 
                  value={this.state.date_birth} onChange={this.bind} required />
                  NO Hp
                  <input type="int" className="form-control" name="no_hp" 
                  value={this.state.no_hp} onChange={this.bind} />
                  Alamat
                  <input type="text" className="form-control" name="alamat" 
                  value={this.state.alamat} onChange={this.bind} />

                  {/* Image
                  <input type="file" className="form-control" name="img_brg" 
                   onChange={this.bindImage} /> */}

                  <button type="submit" className="btn btn-info pull-right m-2">
                    <span className="fa fa-check"></span> Simpan
                  </button>
                </form>
              </Modal></div>
            </div>
          </div>


        </div>
      );
    }
}
export default Member;
