import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    console.log("getbooks called");
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(searchTerm) {
    
    return axios.get("https://www.googleapis.com/books/v1/volumes").query({q:searchTerm});

  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("save book called" + bookData);
    return axios.post("/api/books", bookData);
  }
};
