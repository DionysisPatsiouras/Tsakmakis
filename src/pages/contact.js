import Header from "./components/header"
import Title from "./components/title"
import Footer from "./components/footer"
import Image from "next/image"
import style from '../styles/contact.module.css'
import { useEffect, useState } from "react"


export default function Contact(props) {

    useEffect(() => {
        document.title = 'Τσακμάκης - Επικοινωνία';
    });

    const [status, setStatus] = useState(true)


    return (
        <>
            <Header />
            <Title title='ΕΠΙΚΟΙΝΩΝΙΑ' />

            <div className={style.container}>

                <div className={style.container2}>

                    <div className={style.form}>
                        <form className={style.form2}>
                            <input placeholder="Ηλ. Διεύθυνση" />
                            <input placeholder="Θέμα" />
                            <textarea placeholder="Το μήνυμά σας.." resize="none"></textarea>
                            <button disabled href="mailto:dion.patsiouras@gmail.com">Αποστολή</button>
                        </form>

                    </div>
                    <h3 className={style.location}>ΤΟ ΚΑΤΑΣΤΗΜΑ</h3>
                    <iframe className={style.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.079054717148!2d22.39430771576301!3d39.625423811305474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135888cef66bfd7d%3A0x8ce121426b180b80!2zzpbOrs-BzrEgMSwgzpvOrM-BzrnPg86xIDQxMyAzNA!5e0!3m2!1sel!2sgr!4v1674589098367!5m2!1sel!2sgr" width="600" height="450" style={{ "border": "0" }} allowFullScreen="" loading="eager" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className={style.bottomLine}>
                    <div className={style.phone}>
                        <img src='/img/icons/mail.png' alt='Email' />
                        <h2>info@tsakmaki.gr</h2>
                    </div>
                    <div className={style.mail}>
                        <img src='/img/icons/phone.png' alt='Phone Number' />
                        <h2>2410 613758 • 693 202 2321</h2>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    );
}