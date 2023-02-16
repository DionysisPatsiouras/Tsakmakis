import style from '../../styles/burger.module.css'
import Link from "next/link"

export default function BurgerMenu(props) {
    return (
        <div className={style.burgerMenu} style={{'left' : props.left, 'transition' : props.transition} }>
            <Link href='/'><li>ΑΡΧΙΚΗ</li></Link>
            <Link href='/about'><li>ΠΟΙΟΙ ΕΙΜΑΣΤΕ</li></Link>
            <Link href='/services'><li>ΥΠΗΡΕΣΙΕΣ</li></Link>
            <Link href='/portfolio'><li>ΔΕΙΓΜΑΤΑ</li></Link>
            <Link href='/contact'><li>ΕΠΙΚΟΙΝΩΝΙΑ</li></Link>
        </div>
    )
}

