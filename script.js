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

  //checks if all fields are filled
  if (!bookTitle || !bookAuthor || !bookPages) {
    alert("Give all information.");
    return;
  }

  const book = new Info(bookTitle, bookAuthor, bookPages, bookRead);

  // updates the array
  books.push(book);

  //calls the function that displays the books
  displayBooks();

  //clears the fields in the form
  document.getElementById("myForm").reset();
});

//loop that makes sure the books are displayed
function displayBooks() {
  const shelf = document.getElementById("shelf");

  //clears anything on the page
  shelf.innerHTML = "";

  //loop that generates the updates book information to the screen
  books.forEach((book, index) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div>
  <strong>Title:</strong> ${book.title}<br>
  <strong>Author:</strong> ${book.author}<br>
  <strong>Pages:</strong> ${book.pages}<br>
  </div>`;

    //create a button to delete array book entry
    const newBtn = document.createElement("button");
    newBtn.textContent = "Delete";
    newBtn.addEventListener("click", function() {
      books.splice(index, 1);
      displayBooks();
    });

    //create a button to switch read/unread
    const slider = document.createElement("button");
    slider.textContent = books[index].read ? "Book Read" : "Book unread";
    slider.addEventListener("click", function() {
      books[index].read = !books[index].read;
      slider.textContent = books[index].read ? "Book Read" : "Book unread";
      displayBooks();
    });

    //push the new items
    shelf.appendChild(newDiv);
    newDiv.appendChild(slider);
    newDiv.appendChild(newBtn);
  });
}
