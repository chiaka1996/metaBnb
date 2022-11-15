import logo from './Images/logo.png';
import metabnb from './Images/metabnb.png';
import nav from './Navigation.module.css';
import {Link} from 'react-router-dom';

const Navigation = ({openModal, openToggle}) => {
    return(
        <div className={nav.navContainer}>
            <div style={{padding: '1% 0 0 0'}}>
                <img src={logo} alt='logo' className={nav.logoImgHouse}/>
                <img src={metabnb} alt='metabnb' className={nav.logoImg}/>
            </div>

            <div className={nav.links}>
                <Link to='/' style={{textDecoration: 'none', color: '#434343'}}>
                <div>Home</div>
                </Link>
                <Link to='/place' style={{textDecoration: 'none', color: '#434343'}}>
                <div>Place to stay</div>
                </Link>
                <div>NFTs</div>
                <div>Community</div>
            </div>
            
            <div className={nav.btnContainer}>
            <button 
            className={nav.btn} 
            onClick={openModal}
            >
            Connect wallet
            </button>
            </div>

            {/* menu icon for mobile */}
            <div className={nav.menuContainer}>
            <img
             src="https://img.icons8.com/ios-glyphs/30/null/circled-menu.png"
             alt='menu button'
             onClick={openToggle}
             />
            </div>
            
        </div>
    )
}

export default Navigation