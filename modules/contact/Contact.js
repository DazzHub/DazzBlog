import React from 'react';

import style from '../../styles/contact/Contact.module.css'

export default function Contact() {

    const name = React.useRef(undefined);
    const telephone = React.useRef(undefined);
    const email = React.useRef(undefined);
    const question = React.useRef(undefined);

    return (
        <>   
            <div className={style.container}>
                <div className={style.contact_container}>
                    <div className={style.item_a}>

                        <div className={style.form}>   
                            <p>Fill out the form and we will communicate as quickly as possible.<br/> You can also contact us on our social networks.</p>                            
                            <div className={style.form_group}>
                                <input className={style.form_control} type="text" placeholder="What's your name?" ref={name} defaultValue="" />
                            </div>

                            <div className={style.form_group}>
                                <input className={style.form_control} type="text" placeholder="your telephone?" ref={telephone} defaultValue="" />
                            </div>

                            <div className={style.form_group}>
                                <input className={style.form_control} type="text" placeholder="your email?" ref={email} defaultValue="" />
                            </div>

                            <div className={style.form_group}>
                                <textarea className={style.form_control + " " + style.from_textarea} type="text" placeholder="Your question?" ref={question} defaultValue=""/>
                            </div>                                     
                                                                                                
                            <div className={style.form_group}>        
                                <button className={style.button} onClick={() => addProduct()}>Send</button>  
                            </div>                
                        </div> 
                    </div>

                    <div className={style.item_b}>
                        <div className={style.info}>
                            <p>info@dazzblog.com</p>
                            <p>T. +54 (0223) 0000805</p>
                            <a href="facebook.com"><img src="./icons/facebook.svg"/> Follow us!</a>
                        </div>
                    </div>
                </div>
            </div>     
        </>
    );
}