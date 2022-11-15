import logo from './Images/logo.png';
import metabnb from './Images/metabnb.png';
import side from './Sidenav.module.css'
import {Link} from 'react-router-dom';

const SideNav = ({closeToggle, toggleSideBar}) => {
    return(
        // <div className={side.barBody}>
        <div className={toggleSideBar ? side.showContainer : side.Container}>
            <div className={side.logoDiv} style={{padding: '5% 3% 0 5%'}}>
            <div>
            <img src={logo} alt='logo'/>
            <img src={metabnb} alt='metabnb'/>
            </div>
            <div style={{padding: '3% 0 0 0'}}>
            
            <img 
            src="https://img.icons8.com/material-sharp/25/null/delete-sign.png"
            alt='cancel sidebar'
            onClick={closeToggle}
            />
            </div>
            </div>
            <Link to='/' style={{textDecoration: 'none', color: '#434343'}}>
            <div className={side.link}>Home</div>
            </Link>

            <Link to='/' style={{textDecoration: 'none', color: '#434343'}}>
            <div className={side.link}>Place to Stay</div>
            </Link>

            <Link to='/' style={{textDecoration: 'none', color: '#434343'}}>
            <div className={side.link}>NFTs</div>
            </Link>

            <Link to='/' style={{textDecoration: 'none', color: '#434343'}}>
            <div className={side.link}>Community</div>
            </Link>
            
        </div>
        // </div>
    )
}

export default SideNav;