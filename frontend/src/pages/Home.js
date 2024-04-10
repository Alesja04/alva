import React, { useRef } from "react";
//import {Container} from 'react-bootstrap';
import MainScreen from "../components/MainScreen";
import Menu from "../components/Menu";
import Reserveerimine from "../components/Reserveerimine";
import About from "../components/About";
//import Events from '../components/Events';
//import Delivery from '../components/Delivery';
import Contact from "../components/Contact";
import { Nav, Navbar } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

export default function Home() {
  const mainscreenRef = useRef();
  const aboutRef = useRef();
  const menuRef = useRef();
  const reserveerimineRef = useRef();
  const contactRef = useRef();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() =>{
    handleShow();
  }, [])

  function aboutClick() {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function menuClick() {
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function reserveerimineClick() {
    reserveerimineRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function contactClick() {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  }

  //-----to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        sticky="top"
        expand="md"
        variant="white"
        className="justify-content-center"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <Nav>
          <Nav.Link onClick={scrollToTop}>
            <img src="./img/logo.png" alt="logo" width={130} height={50} />
          </Nav.Link>
          <Nav.Link onClick={aboutClick}>MEIST</Nav.Link>
          <Nav.Link onClick={menuClick}>MENÜÜ</Nav.Link>
          <Nav.Link onClick={contactClick}>KONTAKTID</Nav.Link>
          <Nav.Link onClick={reserveerimineClick}>RESERVEERIMINE</Nav.Link>
          <Nav.Link><a href="./Delivery.js"><img src="./img/tar.png" alt="logo" width={60} height={50} /></a>
          </Nav.Link>

          {/* <Nav.Link onClick={contactClick}>Contact</Nav.Link>
                <Nav.Link onClick={regformClick}>Register</Nav.Link>
                <Nav.Link href="http://localhost:5000/zajavka/" target="_blank">Register List</Nav.Link> */}
        </Nav>
      </Navbar>

      <section ref={mainscreenRef} className="pt-0">
        <MainScreen menuRef={menuClick} />
      </section>

      <section ref={aboutRef} className="pt-2">
        <About />
      </section>

      <section ref={menuRef} className="pt-5">
        <Menu />
      </section>

      <section ref={contactRef} className="pt-5">
        <Contact />
      </section>

      <section ref={reserveerimineRef} className="pt-5">
        <Reserveerimine />
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>TULE MEIE MEISTRIKLASSI!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Meistriklassi programm hõlmab järgmist:</p>
            <ul>
                <li>Taina valmistamine</li>
                <li>Croissantide vormimine</li>
                <li>Õige küpsetamise saladused</li>
                <li>Ideed täidiste jaoks</li>
            </ul>
            <p>Osalemise hind: <b>10€</b></p>
            <p>*Ära jäta kasutamata võimalust õppida, kuidas valmistada maitsvaid ja krõbedaid croissante nagu profi! Kutsu oma sõbrad ja pere, sest koos küpsetamine on veelgi lõbusam!</p>
            
            <form>
            <label>
                NIMI: 
                <input type="text" name="name" />
            </label>

            <label>
                PEREKONNANIMI: 
                <input type="text" name="name" />
            </label>

            <label>
                TELEFONINUMBER: 
                <input type="text" name="name" />
            </label>

            <label>
                EMAIL: 
                <input type="text" name="name" />
            </label>

            </form>

            </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handleClose}>
            REGISTREERIMINE
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}
