import Header from "./components/header"
import Title from './components/title'
import Footer from "./components/footer"
import Image from "next/image"
import style from './../styles/services.module.css'
import { useEffect, useState } from "react"


export default function Services(props) {


    useEffect(() => {
        document.title = 'Τσακμάκης - Υπηρεσίες';
    });


    const [img, setImg] = useState('/img/preview/' + 1 + '.jpg');
    const [bullet, setBullet] = useState('')


    function changeImg(x) {
        setImg('/img/preview/' + x + '.jpg')
        setBullet('•')
    }
    function resetImg(y) {
        setImg('/img/preview/' + y + '.jpg')
        setBullet('')
    }

    return (
        <>
            <Header />
            <Title title='ΥΠΗΡΕΣΙΕΣ' />
            <div className={style.container}>
                <ul>
                    <li onMouseOver={() => changeImg(1)} onMouseLeave={() => resetImg(0)}>ΕΚΤΥΠΩΣΕΙΣ OFFSET</li>
                    <li onMouseOver={() => changeImg(2)} onMouseLeave={() => resetImg(0)}>ΕΠΑΓΓΕΛΜΑΤΙΚΕΣ ΚΑΡΤΕΣ</li>
                    <li onMouseOver={() => changeImg(3)} onMouseLeave={() => resetImg(0)}>ΦΥΛΛΑΔΙΑ</li>
                    <li onMouseOver={() => changeImg(4)} onMouseLeave={() => resetImg(0)}>ΚΑΤΑΛΟΓΟΙ ΕΣΤΙΑΤΟΡΙΩΝ</li>
                    <li onMouseOver={() => changeImg(0)} onMouseLeave={() => resetImg(0)}>ΤΙΜΟΛΟΓΙΑ</li>
                    <li onMouseOver={() => changeImg(0)} onMouseLeave={() => resetImg(0)}>ΑΥΤΟΚΟΛΛΗΤΑ</li>
                    <li onMouseOver={() => changeImg(7)} onMouseLeave={() => resetImg(0)}>ΠΡΟΣΚΛΗΤΗΡΙΑ</li>
                    <li onMouseOver={() => changeImg(8)} onMouseLeave={() => resetImg(0)}>ΦΑΚΕΛΟΙ</li>
                    <li onMouseOver={() => changeImg(9)} onMouseLeave={() => resetImg(0)}>ΑΦΙΣΕΣ</li>

                </ul>

                <div className={style.desktopImages}>
                    {/* <Image
                        style={style.desktopImages}
                        priority
                        src={img}
                        height={402}
                        width={612}
                        alt='img'
                    /> */}

                    <img src={img} alt='' /> 
                </div>



            </div>

            <Footer />
        </>
    );
}