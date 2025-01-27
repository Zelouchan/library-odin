let books = [];

function Info(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();

  const bookTitle = document.getElementById("title").value;
  const bookAuthor = document.getElementById("author").value;
  const bookPages = document.getElementById("pages").value;
  const bookRead = document.getElementById("book_read").value;

  const book = new Info(bookTitle, bookAuthor, bookPages, bookRead);

  books.push(book);

  displayBooks();

  document.getElementById("myForm").reset();
});

function displayBooks() {
  const shelf = document.getElementById("shelf");

  shelf.innerHTML= "";

  books.forEach(book => {

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
  <strong>Title:</strong> ${book.title}<br>
  <strong>Author:</strong> ${book.author}<br>
  <strong>Pages:</strong> ${book.pages}<br>
  <strong>Read?</strong> ${book.read}`;

  shelf.appendChild(newDiv); });
}

