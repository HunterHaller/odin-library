const myLibrary = [];

function Book(title, author, pages, read, id) {
    if (!new.target) {
        throw Error("Please use the 'new' operator to call the constructor!");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + (this.read ? "read." : "not read yet.");
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newID = crypto.randomUUID();
    const newBook = new Book(title, author, pages, read, newID);
    myLibrary.push(newBook);
    console.log("Added new book to library with title '" + newBook.title + "' and ID " + newBook.id);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Way of Kings", "Brandon Sanderson", 1040, true)

//const TheHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
//console.log(TheHobbit.info());
//Object.getPrototypeOf(TheHobbit) === Book.prototype;