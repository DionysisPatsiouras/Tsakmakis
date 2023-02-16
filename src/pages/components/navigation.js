import Link from "next/link";
import style from '../../styles/navigation.module.css'
export default function Navigation(props) {
    return (
        <div className={style.container}>
            <div className={style.top}>
                <img className={style.logo} src={'/img/logo.jpeg'} alt='' />
            </div>
            <nav className={style.menu}>
                <ul>
                    <Link href='/about'><li>ΠΟΙΟΙ ΕΙΜΑΣΤΕ</li></Link>
                    <Link href='/services'><li>ΥΠΗΡΕΣΙΕΣ</li></Link>
                    <Link href='/portfolio'><li>ΔΕΙΓΜΑΤΑ</li></Link>
                    <Link href='/contact'><li>ΕΠΙΚΟΙΝΩΝΙΑ</li></Link>
                </ul>
            </nav>

            <ul className={style.social}>
                <h6>find us</h6>
                <a href="https://www.facebook.com/TsakmakisPrint">
                    <img src={'/img/icons/facebook.png'} alt='Facebook' />
                </a>
                {/* <img src={'/img/icons/instagram.png'} alt='Instagram' /> */}
                <a href="mailto:info@tsakmaki.gr">
                    <img src={'/img/icons/mail.png'} alt='Email' />
                </a>
                <a href="tel:+30 2410613758">
                    <img src={'/img/icons/phone.png'} alt='Phone Number' />
                </a>
            </ul>
        </div>
    );
}