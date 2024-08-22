const myLibrary =[]


function Book(title, author,numberOfPages,read){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}