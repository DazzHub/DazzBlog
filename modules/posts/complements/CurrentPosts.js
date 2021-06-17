import React from 'react'
import Link from 'next/link'

import style from '../../../styles/posts/complements/left/PostLeft.module.css'

const CurrentPosts = ({ posts }) => {

    const [ spinner, setSpinner ] = React.useState(false);

    const mapData = () => {
        const newdata = [];                
        posts.map(element => {
            newdata.push((                
                <Link href={"/post/" + element.id} key={element.id}>
                    <div className={style.card} onClick={() => setSpinner(true)}>
                        <div className={style.card_grid}>

                            <div className={style.card_left}>
                                <img src="defor.png"></img>
                            </div>

                            <div className={style.card_right}>
                                <div className={style.card_title}>
                                    <img src="./icons/clock.svg"></img>
                                    <p>JUEVES, 27, 05, 2021</p>
                                </div>

                                <div className={style.card_body}>
                                    <p>{element.title}</p>
                                </div> 

                                <div className={style.card_footer}>
                                    <a><img src="./icons/facebook.svg" height="20px"></img></a>
                                    <a><img src="./icons/twitter.svg" height="20px"></img></a>
                                    <a><img src="./icons/yt.svg" height="20px"></img></a>
                                </div> 
                            </div>
                        </div>
                    </div>      
                </Link>          
            ));
        })
                
        return newdata;    
    }

    const WhatShow = () => {
        if(spinner){
            return <img src="../Spinner.svg"/>;
        } else {
            return mapData();
        }
    }

    return WhatShow();
}

export default CurrentPosts;