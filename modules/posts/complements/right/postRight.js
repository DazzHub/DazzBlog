import React from 'react'
import Link from 'next/link'

import GlobalState from '../../../layouts/complements/GlobalStates'

import style from '../../../../styles/posts/complements/right/PostRight.module.css'

const PostRight = ({posts}) => {

    const {data} = React.useContext(GlobalState);

    if(data === "default"){
        return <h2>Loading...</h2>
    }

    let currentPosts = undefined;

    (data.length === 0) ? currentPosts = posts.slice(0, 10) : currentPosts = data.slice(0, 10)

    const [ spinner, setSpinner ] = React.useState(false);
      
    const mapData = () => {
        const newdata = [];    

        currentPosts.map(element => {
            newdata.push(( 
                <Link href={"/post/" + element.id} key={element.id}>
                    <div className={style.card} onClick={() => setSpinner(true)}>
                        <div className={style.card_grid}>

                            <div className={style.card_left}>
                                <img src="../defor.png"></img>
                            </div>

                            <div className={style.card_right}>
                                
                                <div className={style.card_title}>
                                    <img src="../icons/clock.svg"></img>
                                    <p>JUEVES, 27, 05, 2021</p>
                                </div>

                                <div className={style.card_body}>
                                    <p>{element.title}</p>                                
                                </div>                                  
                            </div>
                        </div>
                    </div>
                </Link>
            ))
        })

        return newdata;    
    }

    const WhatShow = () => {
        if(spinner){
            setTimeout(() =>{
                setSpinner(false);
            }, 500);
            return <img src="../Spinner.svg"/>;
        } else {
            return mapData();
        }
    }

    return(
        <>
            <div className={style.container_right}>

                <div className={style.popular_container}>
                    
                    {WhatShow()}
                    

                </div>
            </div>
        </>
    );
}

export default PostRight;