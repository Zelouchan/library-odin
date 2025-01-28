let books = [];

// gather information about books and order it
function Info(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// events occuring when the submit button is clicked
document.getElementById("submit").addEventListener("click", function (event) {
  const bookTitle = document.getElementById("title").value;
  const bookAuthor = document.getElementById("author").value;
  const bookPages = document.getElementById("pages").value;
  const bookRead = document.getElementById("book_read").value;

  const book = new Info(bookTitle, bookAuthor, bookPages, bookRead);

  // updates the array
  books.push(book);

  //calls the function that displays the books
  displayBooks();

  //clears the fields in the form
  document.getElementById("myForm").reset();
});

//loop that makes sure the books are displaye
function displayBooks() {
  const shelf = document.getElementById("shelf");

  //clears anything on the page
  shelf.innerHTML = "";

  //loop that generates the updates book information to the screen
  books.forEach((book) => {
    const newDiv = document.createElement("div");
    newDiv.id = book.title;
    newDiv.innerHTML = `
  <strong>Title:</strong> ${book.title}<br>
  <strong>Author:</strong> ${book.author}<br>
  <strong>Pages:</strong> ${book.pages}<br>
  <strong>Read?</strong> ${book.read} <br>
  <label class="switch">
  <input type="checkbox">
  <span class="slider round"></label>
  <button id="delete">delete</button> 
`;
    shelf.appendChild(newDiv);
  });
}

function toggleRead() {
//search arrays for the one with the specific book title
// adjust object read
  displayBooks();
}

document.querySelectorAll("#delete").forEach((button) => {
button.addEventListener("click", function() {
  
  shelf.innerHTML = "YES";
  // find index of array
  // slice that index
// use id = book.title
// delete array with that book title
 displayBooks();
})
}
);



