import createLibrary from "./library.js";
import { createBook } from "./book.js";

const library =createLibrary();


const book1={
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A powerful story of racial injustice and loss of innocence in the American South, told through the eyes of young Scout Finch.",
    numberOfPages: 324,
    read: false

}
const book2={
    
        title: "1984",
        author: "George Orwell",
        description: "A dystopian novel set in a totalitarian society, exploring themes of government surveillance, censorship, and the manipulation of truth",
        numberOfPages: 328,
        read: false
    
    
}
const book3={
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A classic romance novel that satirizes the social expectations of the English Regency era, focusing on the spirited Elizabeth Bennet and the proud Mr. Darcy.",
    numberOfPages:432,
    read:true
}

library.addBook(createBook(book1.title, book1.author, book1.description,book1.numberOfPages,false));
library.addBook(createBook(book2.title, book2.author, book2.description,book2.numberOfPages,true));
library.addBook(createBook(book3.title, book3.author, book3.description,book3.numberOfPages,true));

library.renderBooks();


const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog .cancel");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

// Get the form element
const form = document.querySelector('dialog form');

// Listen for the form's submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a book object from the form data
    const book = {
        title: document.getElementById('input-title').value,
        author: document.getElementById('input-author').value,
        description: document.getElementById('book-description').value,
        numberOfPages: document.getElementById('book-number-of-pages').value,
        read: document.querySelector('input[name="read"]:checked').value==read ? true : false,
    };
    library.addBook(createBook(book.title, book.author, book.description, book.numberOfPages,book.read));
    library.renderBooks();
    // Log the book object to the console (for demonstration)
    console.log(book);
    //reset all fields
     document.getElementById('input-title').value=''
     document.getElementById('input-author').value=''
     document.getElementById('book-description').value=''
     document.getElementById('book-number-of-pages').value=''

    // Close the dialog (optional)
    
    dialog.close();
    // You can now send the book object to a server, store it locally, or update your UI
});
