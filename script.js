const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("book_read");

function Info(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.sayTitle = function() {
    return this.title + ", " + this.author + ", " + this.pages + ", " + this.read;
  };
}

document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();

  const book = new Info(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
  console.log(book.sayTitle());

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
  <strong>Title:</strong> ${book.title}<br>
  <strong>Author:</strong> ${book.author}<br>
  <strong>Pages:</strong> ${book.pages}<br>
  <strong>Status:</strong> ${book.read ? "Read" : "Not Read"}`;

  const parentElement = document.getElementById("shelf"); 
  parentElement.appendChild(newDiv);

  const form = getElementById("myForm")
  form.reset();
})



