
const Footer = () => (

    <>  
    
            <footer className="main-footer">
        <ul className="social-icon">
            <li className="social-icon__item">
            <a className="social-icon__link" href="#">
                <ion-icon name="logo-facebook" />
            </a>
            </li>
            <li className="social-icon__item">
            <a className="social-icon__link" href="https://twitter.com/CryptechCraft">
                <ion-icon name="logo-twitter" />
            </a>
            </li>
            <li className="social-icon__item">
            <a
                className="social-icon__link"
                href="https://discord.com/invite/WxvrzzPFAH"
            >
                <ion-icon name="logo-discord" />
            </a>
            </li>
            <li className="social-icon__item">
            <a className="social-icon__link" href="#">
                <ion-icon name="logo-instagram" />
            </a>
            </li>
        </ul>
        <h3 className="main-footer-text text-motion-index">
            {" "}
            © 2023 CryptechTest : MINETEST Server | All rights reserved.
        </h3>
        </footer>

        </>
      );
      
      export default Footer;