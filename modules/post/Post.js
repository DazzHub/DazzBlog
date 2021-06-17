import React from 'react'

import Menu from '../complements/menu/Menu'
import PostLeft from './complements/PostLeft'
import PostRight from '../posts/complements/right/postRight'
import Comments from './complements/Comments'
import Footer from '../complements/footer/Footer'
import RtModal from './complements/RtModal'

import style from '../../styles/post/Post.module.css'

function Post({data, posts}) {

    const [ openModal, setOpenModal ] = React.useState(false);
    const dropdown = React.useRef(null);

    const handleOpen = () => {
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
    }

    React.useEffect(() => {
        
        if (!openModal) return;
        
        function handleClick(event) {
          if (dropdown.current && !dropdown.current.contains(event.target)) {
            setOpenModal(false);
          }
        }
        window.addEventListener("click", handleClick);
        
        return () => window.removeEventListener("click", handleClick);
      }, [openModal]);

    return (
        <>
            {openModal && <RtModal handleClose={handleClose} dropdown={dropdown}/>}

            <Menu/>
        
            <div className={style.container}>

                <div className={style.item_a}>

                    <div className={style.section_title}>
                        <div className={style.section_widget_title}>
                            <h2>Estás viendo</h2>
                            <span></span>
                        </div>
                    </div>

                    <PostLeft data={data} handleOpen={handleOpen}/>

                    <div className={style.section_title}>
                        <div className={style.section_widget_title}>
                            <h2>Comentario</h2>
                            <span></span>
                        </div>
                    </div>

                    <Comments/>

                </div>

                <div className={style.item_b}>

                    <div className={style.section_title}>
                        <div className={style.section_widget_title + " " + style.section_widget_title2}>
                            <h2>Más populares</h2>
                            <span></span>
                        </div>
                    </div>

                    <PostRight posts={posts}/>
                </div>
                
            </div>

            <Footer/>            
            
        </>
    );
}

export default Post;