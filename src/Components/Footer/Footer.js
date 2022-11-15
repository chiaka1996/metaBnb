import footer from './Footer.module.css'
import vector1 from './Images/Vector1.png'
import meta from './Images/meta.png'
import vector2 from './Images/Vector2.png'
import vector3 from './Images/Vector3.png'
import vector4 from './Images/Vector4.png'
import vector5 from './Images/Vector5.png'

const Footer = () => {
    return (
        <div className={footer.footerContainer}>
            <div className={footer.footerLinksContainer}>
                <div className={footer.logoContainer}>
                    <img src={vector1} alt='footer logo'/>
                    <img src={meta} alt='logo' />
                    <div className={footer.icons}>
                    <img src={vector2} alt='facebook' height='18px'/>
                    <div className={footer.instagram}>
                        <div className={footer.instaCircle}></div>
                    </div>
                    <img src={vector4} alt='twitter' height='18px'/>
                    </div>
                </div>
                    <div>
                        <div className={footer.linkHeading}>Community</div>
                        <ul>
                            <li>NFT</li>
                            <li>Tokens</li>
                            <li>Landlords</li>
                            <li>Discord</li>
                        </ul>
                    </div>
                    <div>
                        <div  className={footer.linkHeading}>Places</div>
                        <ul>
                            <li>Castle</li>
                            <li>Farms</li>
                            <li>Beach</li>
                            <li>Learn more</li>
                        </ul>
                    </div>

                    <div>
                        <div  className={footer.linkHeading}>About us</div>
                        <ul>
                            <li>Road map</li>
                            <li>Creators</li>
                            <li>Career</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
            </div>
            <div  className={footer.metabnbContainer}>
            <img src={vector5} height='15px'/>
            <span className={footer.meta202}>
            2022 Metabnb
            </span>
            </div>
        </div>
    )
}

export default Footer;