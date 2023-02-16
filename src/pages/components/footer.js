import style from '../../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={style.footer}>
            <p>
                © 2023 Tsakmakis, All Rights Reserved | Powered by <a href='https://linktr.ee/patsiouras_dionysis' className={style.bio}>Patsiouras Graphics</a>
            </p>
        </footer>
    );
}