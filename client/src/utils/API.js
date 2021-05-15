import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    console.log("getbooks called");
    return axios.get("/api/books");
  },
  // Gets the book with the given id

  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },


  // Saves a book to the database
  saveBook: function(bookData) {
    console.log(bookData);
      // "title " + bookData.data.volumeInfo.title+
      // "authors "+ bookData.data.volumeInfo.authors+
      //   "description " + bookData.data.searchInfo?.textSnippet+
      //   "link "+ bookData.data.volumeInfo.infoLink + 
      //   "volId" + bookData.data.id)
      return( axios.post("api/books/", {
        title: bookData.data.volumeInfo.title,
        image: bookData.data.volumeInfo.imageLinks?.smallThumbnail,
        authors: bookData.data.volumeInfo.authors,
        description: bookData.data.searchInfo?.textSnippet,
        link: bookData.data.volumeInfo.infoLink,
        volId: bookData.data.id
      }))
    }
}
