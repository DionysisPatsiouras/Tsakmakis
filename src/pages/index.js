import Head2 from './components/head'

import Navigation from './components/navigation'
import Footer from './components/footer'
import style from '../styles/homepage.module.css'
import { React, useState, useEffect } from 'react'
import BurgerMenu from './components/burgerMenu'



export default function Home() {

  const [status, setStatus] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 769)
        setStatus(false)

    })
  }, [])


  return (
    <>


      <Head2 title="Τσακμάκης - Εκτυπώσεις" />
      <div className={style.container}>

        <Navigation />

        {status ? <BurgerMenu left='0px' transition='0.7s' /> : <BurgerMenu left='-100vw' transition='0.5s' />}


        <div className={style.mobileMenu}>
          <img className={style.burger} src={status ? '/img/icons/close.png' : '/img/icons/burger.png'} alt='menu' onClick={() => setStatus(!status)} />
          <img className={style.logo} src={'/img/logo.jpeg'} alt='menu' />
        </div>

        <div className={style.video}>
          <img src='/img/preview/0.jpg' alt='video' />
          {/* <video autoplay loop muted>
            <source src="img/videos/welcome.mp4" type="video/mp4" ></source>
          </video> */}
        </div>



        <ul className={style.social2}>
          <h6>find us</h6>
          <a href="https://www.facebook.com/TsakmakisPrint" target="_blank">
            <img src={'/img/icons/facebook.png'} alt='Facebook' />
          </a>
          <a href="mailto:info@tsakmaki.gr">
            <img src={'/img/icons/mail.png'} alt='Email' />
          </a>
          <img src={'/img/icons/phone.png'} alt='Phone Number' />
        </ul>


        <Footer />
      </div>
    </>
  );

}
