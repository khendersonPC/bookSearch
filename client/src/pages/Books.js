import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { BookList} from "../components/BookList";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from 'axios'

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [formObject, setFormObject] = useState({});


  // Load all books and store them with setBooks
  // useEffect(() => {
  //   loadBooks()
  // }, [])

  function searchBook(event){
   // event.preventDefault(event);
    axios.request({
      method: 'get',
      url:"https://www.googleapis.com/books/v1/volumes?q="+ formObject.title})
    .then((res)=>{
      setBooks( res.data.items);
    })
  }
 
  //Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  
  // Deletes a book from the database with a given id, then reloads books from the db
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value}) 
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault(); 
      if(formObject.title){
        setSearchField(formObject.title)
        searchBook();
      }
      else{
        setSearchField(formObject.author);
        searchBook();
      }
  };

    return (
      <Container fluid>
            <Jumbotron>
              <h1>Looking for a Book?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="key words or author"
              />
              <FormBtn
                //disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
        
            <div style={{marginTop:50}}>
           
              <h1 style={{display:"inline-block", marginLeft: "30px"}}>Suggestions</h1>
              <h1 style={{display:"inline-block", float:"right", marginRight: "30px"}}><Link to="/SavedBooks">Saved Books</Link> </h1>
       
            
            <BookList books = {books}/>
              
            </div>
         
        
      </Container>
    );
  }


export default Books;
