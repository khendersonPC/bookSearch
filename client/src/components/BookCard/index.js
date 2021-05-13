import React from "react";
import axios from 'axios';
import API from "../../utils/API"
//import "./style.css";


const BookCard = (props) => {

    function handleSave(){
        console.log("handle save");
        console.log(props.volID);
        axios.request({
          method: 'GET',
          url:"https://www.googleapis.com/books/v1/volumes/"+ props.volID})
        .then((res)=>{
            console.log(res);
           API.saveBook(res)
        })   
    }

    

    return (

        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-author">{props.authors}</h6>
                    <p className="card-text">{props.description}</p>
                    
                </div>
                <div class="card-footer">
                <a href={props.link} className="btn btn-primary btn-sm" target="_blank" >View</a>     
                <button onClick={handleSave} className="btn btn-danger btn-sm" style={{marginLeft: "10px"}}>Save</button>
                </div>
        </div>
            )
        }
        
        
export default BookCard;