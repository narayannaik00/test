import React from "react";
import "./Pagination.css";

const Numbers = ({totalPosts, postsPerPage, setCurrentPage,currentPage,}) => {let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++)
    {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Prev              
            </button>
          
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : ""}
                    >
                        {page}
                    </button>
                );
            })}
            <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
            >
                Next
            </button>
        </div>
    );
};

export default Numbers;