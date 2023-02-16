import Header from "./components/header"
import Title from "./components/title"
import Footer from "./components/footer"
import style from '../styles/about.module.css'
import { useEffect } from "react"

export default function Contact(props) {

    useEffect(() => {
        document.title = 'Τσακμάκης - Ποιοί Είμαστε';
    });

    const currentDate = new Date().getFullYear();

    // const imgs = ['/img/preview/1.jpeg', '/img/preview/2.jpeg', '/img/preview/3.jpeg']
    return (
        <>
            <Header />
            <Title title='ΠΟΙΟΙ ΕΙΜΑΣΤΕ' />

            <div className={style.container}>

                <p>Την τυπογραφική μονάδα Αφοί Τσακμάκη ίδρυσε ο <b>Δημήτριος Τσακμάκης</b> το 1968, απο όρθια και επίπεδα μηχανήματα επί της οδού Απόλλωνος 8 στο κέντρο της Λάρισας.
                    Από το 1987 λειτουργούσε παράλληλα και 2ο κατάστημα στην Νεάπολη Λάρισας. Το 1998 ανέλαβαν την εταιρεία οι υιοί <b>Κωνσταντίνος και Φώτιος Τσακμάκης</b>, όπου λειτουργεί μέχρι και σήμερα.<br></br><br></br>
                    Από τις βασικές δραστηριότητες της εταιρείας μας είναι οι εκτυπώσεις offset και ψηφιακή εκτύπωση.
                    Στόχος μας, η εξυπηρέτηση των αναγκών του πελάτη σε ποιότητα, συνέπεια και σε πολύ καλές και προσιτές τιμές.
                    Το οργανωτικό επίπεδο και η εμπειρία μας φτάνει στο σημείο να εξυπηρετούμε αυθημερόν.
                </p>

                <div className={style.line}></div>

                <div className={style.timeline}>
                    <h2>ΧΡΟΝΟΛΟΓΙΟ</h2>

                    <div className={style.markContainer}>

                        <div className={style.tTitle}><h4>ΙΔΡΥΣΗ</h4><h4>2ο ΚΑΤΑΣΤΗΜΑ</h4><h4>ΑΦΟΙ ΤΣΑΚΜΑΚΗ</h4><h4>ΕΩΣ ΣΗΜΕΡΑ&nbsp;</h4></div>
                        <div className={style.bullets}><div className={style.bullet}></div><div className={style.bullet}></div><div className={style.bullet}></div><div className={style.bullet}></div></div>

                        <div className={style.timeLine}></div>
                        <div className={style.dashed}></div>

                        <div className={style.years}><h4>1968</h4><h4>1987</h4><h4>1998</h4><h4>{currentDate}</h4></div>
                        <div className={style.info}><h6>Απόλλωνος 8, Κέντρο</h6><h6>Ζήρα 1, Νεάπολη</h6><h6>&nbsp;</h6><h6>&nbsp;</h6></div>

                    </div>

                    <div className={style.timeLineMobile}></div>
                    <div className={style.timeLineMobileDashed}></div>

                    <div className={style.markContainerMobile}>
                        <div className={style.left}>
                            <div className={style.bullet}></div>
                            <h4>1968</h4>
                        </div>
                        <div className={style.right}>
                            <h4>ΙΔΡΥΣΗ</h4>
                            <h6>Απόλλωνος 8, Κέντρο</h6>
                        </div>
                    </div>


                    <div className={style.markContainerMobile}>
                        <div className={style.left}>
                            <div className={style.bullet}></div>
                            <h4>1987</h4>
                        </div>
                        <div className={style.right}>
                            <h4>2ο ΚΑΤΑΣΤΗΜΑ</h4>
                            <h6>Ζήρα 1, Νεάπολη</h6>
                        </div>
                    </div>


                    <div className={style.markContainerMobile}>
                        <div className={style.left}>
                            <div className={style.bullet}></div>
                            <h4>1998</h4>
                        </div>
                        <div className={style.right}>
                            <h4>ΑΦΟΙ ΤΣΑΚΜΑΚΗ ΟΕ</h4>
                            <h6>&nbsp;</h6>
                        </div>
                    </div>


                    <div className={style.markContainerMobile}>
                        <div className={style.left}>
                            <div className={style.bullet}></div>
                            <h4>2023</h4>
                        </div>
                        <div className={style.right}>
                            <h4>ΕΩΣ ΣΗΜΕΡΑ</h4>
                            <h6>&nbsp;</h6>
                        </div>
                    </div>
                </div>

            </div>




            <Footer />
        </>

    );
}