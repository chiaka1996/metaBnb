import star from '../Images/star.png'
import home from '../home.module.css'

const Inspiration = ({src}) => {
    return(
        <div className={home.gridItem}>
        <img src={src} alt='frame1' className={home.gridItemImg}/>
        <div className={home.imgText}>
            <span>Desert King</span>
            <span>1MBT per night</span>
        </div>

        <div className={home.imgText}>
            <span>2345km away</span>
            <span>available for 2weeks stay</span>    
        </div>

        <div className={home.starContainer}>
            <img src={star} alt='star'/>
            <img src={star} alt='star'/>
            <img src={star} alt='star'/>
            <img src={star} alt='star'/>
            <img src={star} alt='star'/>
        </div>
    </div>
    )
} 

export default Inspiration;