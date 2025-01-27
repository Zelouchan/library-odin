function info(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.sayTitle = function() {
      return this.title + ", " + this.author + ", " + this.pages + ", " + this.read;
    };
  }

  const book = new info("The Hobbit", "JRR Tolkien", "297 pages", "Read");
  console.log(book.sayTitle());
