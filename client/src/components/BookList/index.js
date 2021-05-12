import React from "react";
//import "./style.css";
import BookCard from "../BookCard"
import Col from "../Grid"

export const BookList = (props)=>{
    return(
        <div className= "list">
        <div class="card-deck">
            {
                props.books.map((book, i)=>{
                 
                    return <div className= "col-xs-3" >
                                <BookCard 
                                key={i}
                                image= {book.volumeInfo.imageLinks.smallThumbnail}
                                title= {book.volumeInfo.title}
                                authors= {book.volumeInfo.authors}
                                description={{
                                    if({book.searchInfo.textSnippet}!=Undefined){
                                        return (book.searchInfo.textSnippet)
                                    }
                                    else{
                                        return( "Undefined")
                                    }
                                }}
                                link = {book.volumeInfo.infoLink}
                                />
                            </div>
                }
                )
            }
            </div>
            </div>
    )
}
export default BookList;
