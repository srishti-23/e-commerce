import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { useState,useEffect } from "react";

const MyNav = () => {
  const reduxData=useSelector ((state=>state))
  // const[cart,setCart]=useState([])
  // React.useEffect(()=>{
  //   if(reduxData.cart){
  //     setCart(reduxData.cart.length)
  //   }
  // },[reduxData])
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Shopify</Navbar.Brand>
        <Nav className="me-auto ">
          <Nav.Link>
            <Link to={"/"}> Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"Prod"}>Products</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"about"}>About</Link>
          </Nav.Link>
          <Nav.Link>
          <Link to={"help"}>Help</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"contact"}>Contact</Link>
          </Nav.Link>
          <Nav.Link>
            <Link > Cart({reduxData.cart.length})</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default MyNav;
