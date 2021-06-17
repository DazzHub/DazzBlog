import style from '../../../../styles/posts/complements/left/PostLeft.module.css'

import GlobalState from '../../../layouts/complements/GlobalStates'
import Pagination from '../Pagination'
import CurrentPosts from '../CurrentPosts'

import React from 'react';

export default function PostLeft() {

    const {data} = React.useContext(GlobalState);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(10);

    if(data === "default"){
        return <h2>Loading...</h2>
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <>
            <div className={style.container_left}>

                <div className={style.post_container}>

                    <CurrentPosts posts={currentPosts}/>                    
                    <Pagination postPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} currentPage={currentPage}/>
                    
                </div>                

            </div>
        </>
    );
}