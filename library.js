// function Book(title, author, page) {
//     this.title = title;
//     this.author = author;
//     this.page = page;
// }

class Book {
    constructor (title, author, page) {
        this.title = title;
        this.author = author;
        this.page = page;
    }
}

function displayBook() {

const booksContainer = document.querySelector('.books');
booksContainer.innerHTML = '';
myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    
    const title = document.createElement('h3');
    title.className = 'book-title';
    title.textContent = book.title;

    const author = document.createElement('p');
    author.className = 'book-author';
    author.textContent = book.author;  
    
    const page = document.createElement('p');
    page.className = 'book-page';
    page.textContent = `${book.page} pages`;

    const deleteWrapper = document.createElement('div');
    deleteWrapper.className = 'delete-wrapper';

    const deleteBook = document.createElement('button');
    deleteBook.className = 'deleteBook';
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip';
    tooltip.textContent = 'Remove book';
    deleteBook.addEventListener('click',()=> {
        myLibrary.splice(index, 1);
        displayBook();
    });

    booksContainer.appendChild(bookDiv);
    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(page);
    bookDiv.appendChild(deleteWrapper);
    deleteWrapper.appendChild(deleteBook);
    deleteWrapper.appendChild(tooltip);

})
}

function validateForm(form) {
    const inputArray = form.getElementsByTagName("input");
    for (let i = 0; i < inputArray.length; i++)
    {
        if (inputArray[i].value.trim() ==="") {
            alert(`Please fill the field: ${inputArray[i].name || inputArray[i].id}`);
            return false;
        }
    }
    return true;
}

const book1 = new Book('The Happiest Refuge', 'Anh Do', 350);
const book2 = new Book('Digital Fortress', 'Dan Brown', 283);
const book3 = new Book('Percy Jackson', 'Rick Riodan', 500);
const book4 = new Book('Harry Porter', 'J.K.Rowling', 481);
const myLibrary = [book1, book2, book3, book4];
const addBookButton = document.querySelector('.add-book');
const popupForm = document.getElementById('popupForm');
const bookForm = document.getElementById('bookForm');

displayBook();
addBookButton.addEventListener('click',()=> {
        popupForm.style.display = 'block';
    });
bookForm.addEventListener('submit', (e) =>{
        e.preventDefault();
        const isValid = validateForm(document.getElementById("bookForm"));
        if(!isValid) {
            return;
        }
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const page = document.getElementById('page').value;

        const newBook = new Book(title, author, page);
        myLibrary.push(newBook);
        displayBook();
        popupForm.style.display = 'none';
        bookForm.reset();
    
    })

document.querySelector('.close-form').addEventListener('click', () => {
  document.getElementById('popupForm').style.display = 'none';
  bookForm.reset();
});



