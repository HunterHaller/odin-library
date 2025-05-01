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

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Way of Kings", "Brandon Sanderson", 1040, true)

//Add books to the DOM:
function refreshList(){
    document.querySelector("#book-collection").textContent = "";

    for  (let i = 0; i < myLibrary.length; i++){
        const newCard = document.createElement('div');
        
        const cardTitle = document.createElement('h3');
        const titleText = document.createTextNode(myLibrary[i].title);
        cardTitle.appendChild(titleText);
    
        const cardAuthor = document.createElement('p');
        const authorText = document.createTextNode("By " + myLibrary[i].author);
        cardAuthor.appendChild(authorText);
    
        const cardPages = document.createElement('p');
        const pageText = document.createTextNode("Page count: " + myLibrary[i].pages);
        cardPages.appendChild(pageText);
    
        const cardReadStatus = document.createElement('p');
        const readText = document.createTextNode("Read by user: " + (myLibrary[i].read ? "yes" : "no"));
        cardReadStatus.appendChild(readText);
        
    
        newCard.appendChild(cardTitle);
        newCard.appendChild(cardAuthor);
        newCard.appendChild(cardPages);
        newCard.appendChild(cardReadStatus);
        newCard.className = "book-card";
        document.querySelector("#book-collection").appendChild(newCard);
    
        console.log("Added '" + myLibrary[i].title + "' to display.");
    }
}


let newBookButton = document.querySelector("#newBookButton");
let dialogForm = document.querySelector("#newBookDialog")
newBookButton.addEventListener("click", function() {
    dialogForm.show();
})

let submitBookButton = document.querySelector("#submitBookButton");
submitBookButton.addEventListener("click", function() {
    const newTitle = document.querySelector("#title").value;
    const newAuthor = document.querySelector("#author").value;
    const newPages = document.querySelector("#pages").value;
    const newRead = document.querySelector("#read").value;
    addBookToLibrary(newTitle, newAuthor, newPages, newRead);
    refreshList();
})

refreshList();

//const TheHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
//console.log(TheHobbit.info());
//Object.getPrototypeOf(TheHobbit) === Book.prototype;