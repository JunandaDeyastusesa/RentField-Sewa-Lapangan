import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./Client/Home";
import Profil from "./Client/Profil";
import SewaC from "./Client/Sewa";

import Member from "./Admin/Member";
import Lapangan from "./Admin/Lapangan";
import Sewa from "./Admin/Sewa";

import Login from "./Auth/Login";
import Register from "./Auth/Register";


class Main extends Component{
    render = () => {
        return(
            <Switch>
                <Route path="/Login">
                    <Navbar />
                    <Login />
                </Route>
                <Route path="/Register">
                    <Navbar />
                    <Register />
                </Route>
                <Route exact path="/">
                    <Navbar />
                    <Home />
                    <Footer />
                </Route>
                <Route path="/Member">
                    <Navbar />
                    <Member />
                    <Footer />
                </Route>
                <Route path="/Lapangan">
                    <Navbar />
                    <Lapangan />
                    <Footer />
                </Route>
                <Route path="/Sewa">
                    <Navbar />
                    <Sewa />
                    <Footer />
                </Route>
                <Route path="/Profil">
                    <Navbar />
                    <Profil />
                    <Footer />
                </Route>
                <Route path="/SewaC">
                    <Navbar />
                    <SewaC />
                    <Footer />
                </Route>
            </Switch>
        );
    }
}

export default Main;
