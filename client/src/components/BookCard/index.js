import React from "react";
//import "./style.css";


const BookCard = (props)=>{
    return(
        <div className="card-container">
            <img src= {props.image} alt = ""/>
            <div>
                <h2><a href={props.link}>props.title</a></h2>
                <h3>props.authors</h3>
                <p>props.description</p>
            </div>

        </div>
    )
}

export default BookCard;