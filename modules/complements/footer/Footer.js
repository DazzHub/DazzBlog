import style from '../../../styles/complements/footer/Footer.module.css'

function Footer() {
    return (
        <div className={style.footer}>

            <div className={style.f_icons}>
                <a href="https://www.facebook.com/gabriel.oubina.7/"><img src="../icons/facebook.svg" alt="facebook"/></a>
                <a href="https://twitter.com/GabriTheDev"><img src="../icons/twitter.svg" alt="facebook"/></a>
                <a href="https://www.youtube.com/c/DazzHub"><img src="../icons/yt.svg" alt="facebook"/></a>
            </div>

            <p>© 2021 DazzHub</p>
        </div>
    );
}

export default Footer;