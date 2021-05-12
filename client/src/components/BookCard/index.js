import React from "react";
//import "./style.css";


const BookCard = (props) => {
    return (

        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-author">{props.authors}</h6>
                    <p className="card-text">{props.description}</p>
                    
                </div>
                <div class="card-footer">
                <a href={props.link} className="btn btn-primary" target="_blank" >View</a>     
                    <a href="#" className="btn btn-danger" style={{marginLeft: "10px"}}>Save</a>
                </div>
        </div>
            )
        }
        
        
export default BookCard;