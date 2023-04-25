// Book Class >>> a class to represent a book and its propeties
class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}


//UI Class >>>  a class to make up the  DOM , handlee UI tasks 
class UI{
   static displayBooks(){
 const StoredBooks=[
    {title:'Atomic Habits',
    author:'JG Mitch',
    isbn:'4556'},
    
    {title:'River Bank',
    author:'Antol',
    isbn:'24453'}, 
 ];
   
 const book = StoredBooks;

   }
}



// Store Class >>> a class that will handle storage

// Event >>> Dispay the books

// Event >>> Add a book

// Event >>> Remove a book
