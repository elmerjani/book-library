
function createLibrary(){
    const container =document.querySelector('.books');
    let books=[];
    

    const handleClick = function (event)  {
        
        if (event.target.className==='delete'){
            
            books=books.filter((book)=>{
                
                
                
                return !book.isDeleted();

            });
            

        }
        
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