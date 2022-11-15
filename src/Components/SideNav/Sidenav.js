import logo from './Images/logo.png';
import metabnb from './Images/metabnb.png';
import side from './Sidenav.module.css'
import {Link} from 'react-router-dom';

const SideNav = ({closeToggle, toggleSideBar, openModal}) => {
    // const wallet = () => {
    //     closeToggle
    //     openModal
    // }
    return(
        // <div className={side.barBody}>
        <div className={toggleSideBar ? side.showContainer : side.Container}>
            <div className={side.logoDiv} style={{padding: '5% 3% 0 5%'}}>
            <div>
            <img src={logo} alt='logo'/>
            <img src={metabnb} alt='metabnb'/>
            </div>
            <div className={side.close}>
            
            <img 
            src="https://img.icons8.com/material-sharp/25/null/delete-sign.png"
            alt='cancel sidebar'
            onClick={closeToggle}
            />
            </div>
            </div>
            <Link 
            to='/' 
            style={{
                textDecoration: 'none', 
                color: '#434343'
            }}
            onClick={closeToggle}    
            >
            <div className={side.link}>Home</div>
            </Link>

            <Link 
            to='/place' 
            style={{
                textDecoration: 'none', 
                color: '#434343'
            }}
            onClick={closeToggle} 
            >
            <div className={side.link}>Place to Stay</div>
            </Link>

            {/* <Link 
            to='/' 
            style={{
                textDecoration: 'none', 
                color: '#434343'
            }}
            
            > */}
            <div 
            className={side.link}
            onClick={closeToggle} 
            >NFTs</div>
            {/* </Link> */}

            {/* <Link 
            to='/' 
            style={{
                textDecoration: 'none', 
                color: '#434343'
            }}
            
            > */}
            <div 
            className={side.link}
            onClick={closeToggle} 
            >Community</div>
            {/* </Link> */}

            <div className={side.btnContainer}>
            <button 
            className={side.btn} 
            onClick={openModal}
            >
            Connect wallet
            </button>
            </div>
            
        </div>
        // </div>
    )
}

export default SideNav;