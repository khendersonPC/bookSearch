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
  const [volID, setVolID] = useState("");
  const [searchField, setSearchField] = useState("");
  const [formObject, setFormObject] = useState({});


  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  function searchBook(event){
   // event.preventDefault(event);
    axios.request({
      method: 'get',
      url:"https://www.googleapis.com/books/v1/volumes?q="+ formObject.title})
    .then((res)=>{
      setBooks([...res.data.items]);
    })
  }
 
  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  function handleSave(event){

    axios.request({
      method: 'get',
      url:"https://www.googleapis.com/books/v1/volumes/"+ volID})
    .then((res)=>{
      axios.request({
        method: 'post',
        url:("/api/books", res)
      });
    })
   
      // API.saveBook({
      // title: formObject.title,
      // author: formObject.author,
      // description: formObject.description
      // })

  }
  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

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
      // API.saveBook({
      //   title: formObject.title,
      //   author: formObject.author,
      //   description: formObject.description
      // })
      //   .then(res=>searchBook())
      //   .then(res => loadBooks())
      //   .catch(err => console.log(err));
    
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
        
            <div style={{marginTop:30}}>
           
              <h1>Suggestions</h1>
       
            
            <BookList books = {books} onClick = {handleSave}/>
              
            </div>
         
        
      </Container>
    );
  }


export default Books;
