import React from 'react'

import style from '../../../styles/post/complements/PostLeft.module.css'

const PostLeft = ({data, handleOpen}) => {

    const [ changeColorEffect, setchangeColorEffect ] = React.useState(-1);

    const clickEffect = (type) => {
        setchangeColorEffect(type);

        setTimeout(() => {
            setchangeColorEffect(-1);
        }, 400);
    }

    return (
        <>
            <div className={style.container}>
                <div className={style.card}>
                    
                    <div className={style.card_top}>
                        
                        <div className={style.card_title}>
                            <h1>{data.title}</h1>
                        
                            <div className={style.a_redes}>
                                <a href="https://www.facebook.com/"><img src="../icons/facebook.svg"/></a>
                                <a href="https://twitter.com/home/"><img src="../icons/twitter.svg"/></a>
                                <a href="https://www.youtube.com/"><img src="../icons/yt.svg"/></a>
                            </div>
                                                
                        </div>                                 
                    </div>            

                    <div className={style.card_bottom}>
                        
                        <div className={style.b_body}>
                            <img src="../defor.png"/>                
                            <p className={style.b_body_description}>{data.body}</p>      
                        
                            <div className={style.b_actions}>
                                <div className={style.b_left}>   
                                                    
                                    <span className={style.b_botton + " " + "align"} onClick={() => clickEffect(1)} >
                                        <img src="../icons/like-custom.svg" className={(1 === changeColorEffect ? style.item_selected : '')}/>
                                        <p>47,513</p>
                                        <p className={style.text_hover}>Me gusta</p>                              
                                    </span>

                                    <span className={style.b_botton + " " + "align"} onClick={() => clickEffect(2)} >
                                        <img src="../icons/unlike-custom.svg" className={(2 === changeColorEffect ? style.item_selected : '')}/>
                                        <p>247</p>
                                        <p className={style.text_hover}>No me gusta</p>
                                    </span>

                                    <span className={style.b_botton + " " + "align"} onClick={() => {clickEffect(3), handleOpen()}} >
                                        <img src="../icons/rt-custom.svg" className={(3 === changeColorEffect ? style.item_selected : '')}/>
                                        <p>COMPARTIR</p>
                                        <p className={style.text_hover}>Compartir</p>
                                    </span>                                                    
                                </div>
                                
                                <div className={style.b_right}>
                                    <a>220,330 vistas | 8 jun 2021</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostLeft;