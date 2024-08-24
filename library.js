
function createLibrary(){
    const container =document.querySelector('.books');
    let books=[];
    

    const handleClick = function (event)  {
        console.log(books);
        if (event.target.className==='delete'){
            
            books=books.filter((book)=>{
                console.log(book.isDeleted());
                
                
                return !book.isDeleted();

            });
            

        }
        console.log(books)
    }
    container.addEventListener('click',handleClick)
    function renderBooks(){
        books.forEach(function(book){
            
            container.appendChild(book.bookCard);
        });
    }
    function addBook(book){
        books.push(book);
        
    }
    function removeBook(book){
        books=books.filter(function(bookItem){
            return bookItem===book;
        });
    }
    return {addBook,removeBook,renderBooks};
}
export default createLibrary;