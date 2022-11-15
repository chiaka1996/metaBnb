import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Sidebar from './Components/SideNav/Sidenav'
import Home from './Pages/Home/Home'
import Place from './Pages/Place/Place'
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
import image1 from './Images/image1.png'
import image2 from './Images/image2.png'
import arrow from './Images/arrow.png'
import'./App.css'
import SideNav from "./Components/SideNav/Sidenav";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [toggleSideBar, setToggleSideBar] = useState(false)

  const openToggle = () => {
    setToggleSideBar(true)
  }

  const closeToggle = () => {
    setToggleSideBar(false)
  }

  const openModal = () => {
    setModalShow(true)
  }

  const onHide = () => {
    setModalShow(false)
  }

  return (
    <div className="App">
    <Navigation
      openModal={openModal}
      openToggle = {openToggle}
    />
    <Sidebar 
    closeToggle={closeToggle}
    toggleSideBar={toggleSideBar}
    openModal={openModal}
    />
    <Modal
     show={modalShow}
     onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header closeButton>
      <span className='connectWallet'>Connect Wallet</span>
      </Modal.Header>
      <Modal.Body>
        <div className="modalBody">
        <span className='choose'>Choose your preferred wallet:</span>

        <button className="ButtonMeta">
        <div className="btnFlex">
        <div className='imgMeta'>
        <img src={image1} alt='cat'/>
        <div className="imgMetaFlex">
        Metamask
        </div>
        </div>
        <div style={{padding: '2% 0 0 0'}}>
          <img src={arrow} alt='arrow'/>
        </div>
        </div>
        </button>

        <button className="ButtonMeta" style={{backgroundColor: 'white'}}>
        <div className="btnFlex">
        <div className='imgMeta' style={{width: '51%'}}>
        <img src={image2} alt='cat'/>
        <div className="imgMetaFlex">
        WalletConnect
        </div>
        </div>
        <div style={{padding: '2% 0 0 0'}}>
          <img src={arrow} alt='arrow'/>
        </div>
        </div>
       
        </button>
       
        </div>
      </Modal.Body>
    </Modal>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/place" element={<Place />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
