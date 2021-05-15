import React from "react";
import axios from 'axios';
import API from "../../utils/API"
//import "./style.css";


const BookCard = (props) => {

  const handleSave  =(book)=>{
        console.log("handle save");
        // console.log(props.volID);
        // axios.request({
        //   method: 'GET',
        //   url:"https://www.googleapis.com/books/v1/volumes/"+ props.volID})
        // .then((res)=>{
        //     console.log(res);
        // image={book.volumeInfo.imageLinks ?  book.volumeInfo.imageLinks.smallThumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzReEQnYR7oHkPM93mPL9bPUIj5uAnnqoK08D3zZmwI4rAaVscFAndpeYpOo-qFm3y2kCKCHE02tH1KA-:https://cdn.iconscout.com/icon/premium/png-512-thumb/no-image-1753539-1493784.png&usqp=CAU"}
        // title={book.volumeInfo.title}
        // authors={book.volumeInfo.authors}
        // description={book.searchInfo? book.searchInfo.textSnippet: "No description available"}
        // link={book.volumeInfo.infoLink}
        // volID={book.id}
        const newBook = {
            title: book.title,
            authors: book.authors,
            description: book.description,
            image: book.image,
            link: book.link,
            volID: book.volID
        }
           API.saveBook(newBook)
        // })   
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
                <button onClick={()=>handleSave(props)} className="btn btn-danger btn-sm" style={{marginLeft: "10px"}}>Save</button>
                </div>
        </div>
            )
        }
        
        
export default BookCard;