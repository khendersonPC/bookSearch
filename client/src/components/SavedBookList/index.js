import React from "react";
//import "./style.css";
import SavedBookCard from "../SavedBookCard"
import Col from "../Grid"

export const SavedBookList = (props) => {

    return (
        <div className="list">
            <div class="card-deck">
                {
                    props.books.map((book, i) => {

                        return <div className="col-xs-3" >
                            <SavedBookCard
                                key={i}
                                image={book.image}
                                title={book.title}
                                authors={book.authors}
                               description={book.searchInfo?.textSnippet}
                                link={book.link}
                                volID={book._id}
                                //onClick={props.onClick}
                            />
                        </div>
                    }
                    )
                }
            </div>
        </div>
    )
}
export default SavedBookList;
