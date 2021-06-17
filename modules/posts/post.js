import style from '../../styles/posts/Post.module.css'

import PostLeft from './complements/left/postLeft'
import PostRight from './complements/right/postRight'

export default function Posts() {

    return(
        <>

            <div className={style.sections_container} id="posts">

                <div className={style.section_left}>

                    <div className={style.section_title}>
                        <div className={style.section_widget_title}>
                            <h2>Publicados</h2>
                            <span></span>
                        </div>
                    </div>

                    <PostLeft/>
                </div>

                <div className={style.section_right}>

                    <div className={style.section_title}>
                        <div className={style.section_widget_title + " " + style.section_widget_title2}>
                            <h2>Más populares</h2>
                            <span></span>
                        </div>
                    </div>

                    <PostRight/>
                </div>
                
            </div>

        </>
    );

}