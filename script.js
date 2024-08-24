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