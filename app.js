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
   
        const books = StoredBooks;
        books.forEach((book)=>UI.addBookToList(book))
   }
   static addBookToList(book){
    const list= document.querySelector('#book-list')
    const row= document.createElement('tr')
    row.innerHTML=
   `<td> ${book.title}</td>
    <td> ${book.author}</td>
    <td> ${book.isbn}</td>
    <td> <a href=# class="btn btn-danger btn-sm delete">X </a></td>
    `;
    list.appendChild(row)
   }
}



// Store Class >>> a class that will handle storage

// Event >>> Dispay the books
document.addEventListener('DOMContentLoaded',UI.displayBooks)
// Event >>> Add a book

// Event >>> Remove a book
