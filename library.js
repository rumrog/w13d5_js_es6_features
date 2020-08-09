class Library {
  constructor (books = []) {
    this.books = books;
  }
}

Library.prototype.bookCount = function () {
  return this.books.length;
};

Library.prototype.addBook = function (newBook) {
  this.books.push(newBook);
};

Library.prototype.addBooks = function (newBooks) {
  newBooks.forEach(book => this.books.push(book));
};

Library.prototype.printInventory = function () {
  this.books.forEach(({title, author}) => {
    console.log(`${title} by ${author}`);
  });
};

export default Library;{}

