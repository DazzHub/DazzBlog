import React from 'react'
import { useRouter } from 'next/router'

import style from '../../../styles/post/complements/RtModal.module.css';

const RtModal = ({handleClose, dropdown}) => {
    const router = useRouter()
    const { pid } = router.query

    const textAreaRef = React.useRef(null);

    const copyUrl = (event) => {

        textAreaRef.current.select();
        document.execCommand('copy');
        event.target.focus();
    }

    return (
        <div className={style.container}>   
            <div className={style.modal} ref={dropdown}>

                
                <div className={style.modal_grid}>

                    
                    <div className={style.t_top}>
                        <div className={style.t_left}>
                            <p>Compartir</p>
                        </div>

                        <div className={style.t_right}>
                            
                            <button className={style.close} onClick={() => handleClose()}>
                                <img src="../icons/cros.svg"/>
                            </button>
                        </div>
                    </div>
                    

                    <div className={style.t_bottom}>
                        <div className={style.b_redes}>
                            <img src="../icons/code.svg"/>
                            <p>Incorporar</p>
                        </div> 

                        <div className={style.b_redes}>
                            <img src="../icons/facebook.svg"/>
                            <p>Facebook</p>
                        </div>                                                
                        
                        <div className={style.b_redes}>
                            <img src="../icons/whatsapp.svg"/>
                            <p>WhatsApp</p>
                        </div> 

                        <div className={style.b_redes}>
                            <img src="../icons/twitter.svg"/>
                            <p>Twitter</p>
                        </div>  

                        <div className={style.b_redes}>
                            <img src="../icons/email.svg"/>
                            <p>Email</p>
                        </div>   
                    </div>    

                    <div className={style.modal_footer}>
                        <div className={style.f_body}>
                            <input type="text" onClick={(event) => copyUrl(event)} ref={textAreaRef} readonly='readonly' defaultValue="http://localhost:3000/post/1"></input>
                        </div>
                    </div>

                </div>                             
            </div>         
        </div>
    );
}

export default RtModal;