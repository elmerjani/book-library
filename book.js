


function createBook(title,author,description,numberOfPages,read=false){
    const book ={title,author,description,numberOfPages,read};
    let deleted=false;
    let  bookCard ;
    
    

    function isDeleted(){
        return deleted;
    }
    function deleteBook() {
        deleted = true;
        if (bookCard && bookCard.parentNode) {
            bookCard.parentNode.removeChild(bookCard);
        }
    }
    function toggleReadStatus() {
        book.read = !book.read; 
        updateReadIcon();       
    }
    function updateReadIcon() {
        const readIcon = bookCard.querySelector('.read i');
        if (book.read) {
            readIcon.className = 'fa-solid fa-bookmark fa-2xl';  
        } else {
            readIcon.className = 'fa-regular fa-bookmark fa-2xl'; 
        }
    }

    bookCard = createBookCard(book, deleteBook,toggleReadStatus);
    

    return {book,bookCard,isDeleted,deleteBook,toggleReadStatus };

}



function createBookCard(book,onDelete,onToggleRead) {
    
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';

    const deleteButton = document.createElement('div');
    deleteButton.className = 'delete';
    deleteButton.textContent = '❌';
    bookCard.appendChild(deleteButton);
    deleteButton.addEventListener('click',onDelete)
    

    const img = document.createElement('img');
    img.src = './OIP.jpg';
    img.alt = 'school book image';
    bookCard.appendChild(img);

    const title = document.createElement('h2');
    title.className = 'title';
    title.textContent = book.title;
    bookCard.appendChild(title);

    const author = document.createElement('p');
    author.className = 'author';
    author.innerHTML = '<strong>Author</strong>: ' + book.author;
    bookCard.appendChild(author);

    const description = document.createElement('p');
    description.className = 'description';
    description.innerHTML = '<strong>Description</strong>: ' + book.description;
    bookCard.appendChild(description);

    const pages = document.createElement('p');
    pages.className = 'number-of-pages';
    pages.innerHTML = '<strong>Number of Pages</strong>: ' + book.numberOfPages;
    bookCard.appendChild(pages);

    const readDiv = document.createElement('div');
    readDiv.className = 'read';
    const readIcon=document.createElement('div');
    readIcon.innerHTML = book.read?'<i class="fa-solid fa-bookmark fa-2xl" style="color: #2f2f2f;"></i>':
                                    '<i class="fa-regular fa-bookmark fa-2xl" style="color: #2f2f2f;"></i>';

    readDiv.appendChild(readIcon);
    readDiv.addEventListener('click', onToggleRead);

    bookCard.appendChild(readDiv);

    return bookCard;
}
export {
    createBook,
    createBookCard
}