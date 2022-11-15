import place from './place.module.css'
import frame1 from './Images/Frame1.png'
import frame2 from './Images/Frame2.png'
import frame3 from './Images/Frame3.png'
import frame4 from './Images/Frame4.png'
import frame5 from './Images/Frame5.png'
import frame6 from './Images/Frame6.png'
import frame7 from './Images/Frame7.png'
import frame8 from './Images/Frame8.png'
import frame9 from './Images/Frame9.png'
import frame10 from './Images/Frame10.png'
import frame11 from './Images/Frame11.png'
import frame12 from './Images/Frame12.png'
import frame13 from './Images/Frame13.png'
import frame14 from './Images/Frame14.png'
import frame15 from './Images/Frame15.png'
import frame16 from './Images/Frame16.png'
import setting from './Images/setting.svg'
import PlacesToStay from '../Home/Component/Inspiration'

const Place = () => {
    return(
    <div className={place.placeContainer}>
    <div className={place.linkContainer}>
       <span>Restaurant</span>
       <span>Cottage</span>
       <span>Castle</span>
       <div>fantast city</div>
       <span>beach</span>
       <span>Carbins</span>
       <span>off-grid</span>
       <span>Farm</span>
       <button>
        <div className={place.btnsub}>
        <span>Location </span>
        <img src={setting} alt='setting'/>
        </div>  
        </button>
    </div>

    <div className={place.mobileLinkContainer}>
       <span>Restaurant</span>
       <span>Cottage</span>
       <span>Castle</span>
       <span>fantastcity</span>
       <span>beach</span>
       <span>Carbins</span>
       <span>offgrid</span>
       <span>Farm</span>
    </div>

    <button className={place.mobileLocationBtn}>
        <div className={place.btnsub}>
        <span>Location </span>
        <img src={setting} alt='setting'/>
        </div>  
        </button>

    <div className={place.gridContainer}>
    <PlacesToStay src={frame1} />
    <PlacesToStay src={frame2} />
    <PlacesToStay src={frame3} />
    <PlacesToStay src={frame4} />
    <PlacesToStay src={frame5} />
    <PlacesToStay src={frame6} />
    <PlacesToStay src={frame7} />
    <PlacesToStay src={frame8} />
    <PlacesToStay src={frame9} />
    <PlacesToStay src={frame10} />
    <PlacesToStay src={frame11} />
    <PlacesToStay src={frame12} />
    <PlacesToStay src={frame13} />
    <PlacesToStay src={frame14} />
    <PlacesToStay src={frame15} />
    <PlacesToStay src={frame16} />

    </div>

    </div>
    )
}

export default Place;