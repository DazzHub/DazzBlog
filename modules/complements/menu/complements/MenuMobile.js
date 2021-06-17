import React from 'react';

import mobile from '../../../../styles/complements/menu/MenuMobile.module.css';

export default function MenuMobile() {

    const [isOpenBars, setIsOpenBars] = React.useState(false);
    const [isOpenBarsBefore, setIsOpenBarsBefore] = React.useState(false);

    function menuOpen() {
        
        if(!isOpenBars){
            setIsOpenBars(true);
            setIsOpenBarsBefore(false);
        } else {
            setIsOpenBars(false);
            setIsOpenBarsBefore(true);
        }

    }

    function menuFlex() {
        if(isOpenBars){
            return (
                <div className={mobile.menuFlex}>
                    <ul className={mobile.ul_left}>
                        <li>
                            <a href="">Home</a>                            
                            <a href="">Posts</a>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
            );
        } else {
            if(isOpenBarsBefore){
                
                setTimeout(() => {
                    setIsOpenBarsBefore(false);
                }, 200);

                return (                             
                    <div className={mobile.menuFlexClose} id="menuFlexClose"></div>      
                );
                
            }
        }
    }

    return(
        <nav className={mobile.navbar}>

            <div className={mobile.bars_container + " " + (!isOpenBars ? + "" : mobile.open)} onClick={() => menuOpen()}>
                <div className={mobile.bars}></div>
            </div>

            <a className={mobile.navbar_logo} href="">
                <img src="../logo.svg"></img>
                <p>DazzBlog</p>
            </a>


            <ul className={mobile.ul_right}>
                <li>
                    <a href=""></a>
                </li>
            </ul>

            {menuFlex()}
        </nav>
    );
}