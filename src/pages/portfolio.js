import Header from "./components/header"
import Title from "./components/title"
import Footer from "./components/footer"
import style from '../styles/portfolio.module.css'
import { useEffect, useState } from "react"

export default function Portfolio() {

    useEffect(() => {
        document.title = 'Τσακμάκης - Δείγματα';
    });


    const [title, setTitle] = useState('')
    const [image, setImage] = useState(0)
   

    function setPreview(title, image) {
        setTitle(title)
        setImage(image)
    }

    return (

        <div>
            <Header />
            <Title title='ΔΕΙΓΜΑΤΑ' />

            <div className={style.container}>

                <div className={style.categories}>
                    <img src={'/img/preview/1.jpg'} onMouseOver={()=> setPreview('Εκτυπώσεις Offset', 1)} onMouseLeave={() => setPreview('', 0)} alt='' />
                    <img src={'/img/preview/2.jpg'} onMouseOver={()=> setPreview('Επαγγελματικές Κάρτες', 2)} onMouseLeave={() => setPreview('', 0)} alt='' />
                    <img src={'/img/preview/3.jpg'} onMouseOver={()=> setPreview('Φυλλάδια', 3)} onMouseLeave={() => setPreview('', 0)} alt='' />
                    <img src={'/img/preview/4.jpg'} onMouseOver={()=> setPreview('Κατάλογοι Εστιατορίων', 4)} onMouseLeave={() => setPreview('', 0)} alt='' />
                    <img src={'/img/preview/5.jpg'} onMouseOver={()=> setPreview('Τιμολόγια', 5)} onMouseLeave={() => setPreview('', 0)} alt='' />
                    {/* <img src={'/img/preview/6.jpg'} onMouseOver={()=> setPreview('Αυτοκόλλητα', 6)} onMouseLeave={() => setPreview('', 0)} alt='' /> */}
                    <img src={'/img/preview/7.jpg'} onMouseOver={()=> setPreview('Προσκλητήρια', 7)} onMouseLeave={() => setPreview('', 0)} alt='' />
                    <img src={'/img/preview/8.jpg'} onMouseOver={()=> setPreview('Φάκελοι', 8)} onMouseLeave={() => setPreview('', 0)} alt='' />
                    <img src={'/img/preview/9.jpg'} onMouseOver={()=> setPreview('Αφίσες', 9)} onMouseLeave={() => setPreview('', 0)} alt='' />
                </div>

                <div className={style.preview}>
                    <img src={'/img/preview/' + image + '.jpg'} alt='' />
                    <h5>{title}</h5>
                </div>

            </div>

            <Footer />
        </div>
    );
}