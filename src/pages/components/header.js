import style from '../../styles/header.module.css'
import BurgerMenu from './burgerMenu'
import { React, useState, useEffect } from 'react'

export default function Header() {


    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 769)
                setStatus(false)
        })
    }, [])

    const [status, setStatus] = useState(false)


    return (
        <header className={style.header}>

            {status ? <BurgerMenu left='0px' transition='0.7s' /> : <BurgerMenu left='-100vw' transition='0.5s' />}

            <img className={style.burger} src={status ? '/img/icons/close.png' : '/img/icons/burger.png'} alt='menu' onClick={() => setStatus(!status)} />
            <img className={style.logo} src={'/img/logo.jpeg'} alt='menu' />

            <ul className={style.list}>
                <a href="https://www.facebook.com/TsakmakisPrint">
                    <img src={'/img/icons/facebook.png'} alt='Facebook' />
                </a>
                <a href="mailto:info@tsakmaki.gr">
                    <img src={'/img/icons/mail.png'} alt='Email' />
                </a>
                <a href="tel:+30 2410613758">
                    <img src={'/img/icons/phone.png'} alt='Phone Number' />
                </a>
            </ul>
        </header>
    );


}