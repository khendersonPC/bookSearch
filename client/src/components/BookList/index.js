import React from "react";
//import "./style.css";
import BookCard from "../BookCard"


export const BookList = (props)=>{
    return(
        <div className= "list">
            {
                props.books.map((book, i)=>{
                    return <BookCard 
                                key={i}
                                image= {book.volumeInfo.imageLinks.thumbnail}
                                title= {book.volumeInfo.title}
                                authors= {book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                link = {book.volumeInfo.infoLink}
                                />
                }
                )
            }
        </div>
    )
}
export default BookList;
