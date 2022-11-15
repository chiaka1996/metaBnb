import home from './home.module.css'
import image3 from './Images/image3.png'
import image4 from './Images/image4.png'
import image5 from './Images/image5.png'
import image6 from './Images/image6.png'
import frame1 from './Images/Frame1.png'
import frame2 from './Images/Frame2.png'
import frame3 from './Images/Frame3.png'
import frame4 from './Images/Frame4.png'
import frame5 from './Images/Frame5.png'
import frame6 from './Images/Frame6.png'
import frame7 from './Images/Frame7.png'
import frame8 from './Images/Frame8.png'
import Inspiration from './Component/Inspiration'
import image7 from './Images/image7.png'
import image8 from './Images/image8.png'
import image9 from './Images/image9.png'
import group1 from  './Images/group1.svg'
import group2 from  './Images/group2.svg'
import group3 from  './Images/group3.svg'

const Home = () => {
    return(
        <div>
    <section className={home.homeContainer}>
       <div className={home.banner}>
        <div className={home.bannerFlex1}>
            <div className={home.Header}>
                Rent a <span className={home.coloredHead}>Place</span> away from <br/>
                <span className={home.coloredHead}>Home</span> in the <span className={home.coloredHead}>Metaverse</span>
            </div>

            <div className={home.subText}>
            we provide you access to luxury and affordable houses<br/>
            in the metaverse, get a chance to turn your <br/>
            imagination to reality at your comfort zone
            </div>

            <div className={home.btnContainer}>
                <input type='text' />
                <button className={home.btn}>search</button>
            </div>

        </div>
        <div className={home.bannerFlex2}>
            <div  className={home.imageContainer1}>
                <img src={image4} alt='image4' />
                <img src={image6} alt='image4' />
            </div>
            <div className={home.imageContainer2}>
                <img src={image3} alt='image4' />
                <img src={image5} alt='image4' />
            </div>

        </div>
       </div>
    </section>

    <div className={home.metaLogo}>
        <div className={home.metaLogoImgContainer}>
        <img src={group1} alt='frame' />
        <img src={group2} alt='frame' />
        <img src={group3} alt='frame' />
        </div>
           </div>

        <section className={home.inspirationSection}>
            <div className={home.inspirationHeader}>
            Inspiration for your next adventure
            </div>

            <div className={home.gridBody}>
                <div className={home.gridContainer}>
                   <Inspiration src={frame1} />
                   <Inspiration src={frame2} />
                   <Inspiration src={frame3} />
                   <Inspiration src={frame4} />
                   <Inspiration src={frame5} />
                   <Inspiration src={frame6} />
                   <Inspiration src={frame7} />
                   <Inspiration src={frame8} />
                </div>
            </div>        
        </section>

        <section className={home.nft}> 
        <div className={home.flexContainer}>
        <div className={home.flex1}>
        <div className={home.nftHeader}>
        Metabnb NFTs
        </div>

        <div className={home.nftSubtext}>
        Discover our NFT gift cards collection. Loyal<br/>
        customers gets amazing gift cards which are <br/>
        traded as NFTs. These NFTs gives our cutomer<br/>
        access to loads of our exclusive services.<br/>
        </div>

        <button>
        Learn more
        </button>
        </div>
        <div className={home.flex2}>
             <img src={image9} alt='img9' className={home.image7} />
            <img src={image7} alt='img7' className={home.image8}/>
            <img src={image8} alt='img8' className={home.image9}/>
        </div>
        </div>
        </section>
    </div>
    )
}

export default Home;