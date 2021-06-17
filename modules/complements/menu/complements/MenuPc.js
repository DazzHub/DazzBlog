import pc from '../../../../styles/complements/menu/MenuPc.module.css';

export default function MenuPc() {
    return(
        <nav className={pc.navbar}>     

            <a className={pc.navbar_logo} id="navbar_logo" href="">
                <img src="../logo.svg"></img>
                <p>DazzBlog</p>
            </a>

            <ul className={pc.ul_left}>
                <li>
                    <a href="">Home</a>                            
                    <a href="">Posts</a>
                    <a href="">Contact</a>
                </li>
            </ul>

            <ul className={pc.ul_right}>
                <li>
                    <a href=""></a>
                </li>
            </ul>
        </nav>
    );
}