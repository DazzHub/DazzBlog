import React from 'react';

import style from '../../../styles/posts/Post.module.css'

const Pagination = ({ postPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];

    const totalPages = Math.ceil(totalPosts / postPerPage);

    let pageSize = pageSize || 10;
    let startPage, endPage;

    if (totalPages <= 10) {    
        startPage = 1;
        endPage = totalPages;
    } else {
        // more than 10 total pages so calculate start and end pages
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }

    for (let i = startPage; i < endPage+1 ; i++) {
        pageNumbers.push(i);
    }

    const [activeItem, setActiveItem] = React.useState(1);
   
    const mapData = () => {
        const newdata = []; 

        pageNumbers.map((item) => {
            newdata.push((                                        
                <a 
                key={item} 
                className={style.page_link + " " + (activeItem === item ? style.page_selected : '')}
                onClick={() => {paginate(item), setActiveItem(item), document.getElementById("posts").scrollIntoView({behavior: "smooth"})}}
                >
                    {item}                                  
                </a>
            ))
        })
            
        return newdata;
    }

    function checkPaginateArrow(type){
        if (type){
            if (currentPage >= 1 && currentPage < totalPages){
                paginate(currentPage +1);
                setActiveItem(currentPage +1);                
            }
        } else {
            if (currentPage > 1){
                paginate(currentPage -1);
                setActiveItem(currentPage -1);
            }
        }

        document.getElementById("posts").scrollIntoView({behavior: "smooth"})
    }

    return (        
        <div className={style.pagination}>            
            <div className={style.page_item}>  
                {activeItem > 1 && <a className={style.page_back} onClick={() => checkPaginateArrow(false)}>Anterior</a>}  
                {mapData()}  
                <a className={style.page_next} onClick={() => checkPaginateArrow(true)}>Siguiente</a>
            </div>
        </div>        
    )
}

export default Pagination;