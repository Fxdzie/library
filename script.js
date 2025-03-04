const myLibrary = [];
const container = document.querySelector(".container");
const newBookButton = document.querySelector(".new-book");
const dialog = document.querySelector(".dialog");
const resetButton = document.querySelector(".reset");
const bookForm = document.querySelector("#form");

function Book(title,author,pages,haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = ()=>{
        let readOrNot;
        if(haveRead.toLowerCase()==="no"){
            readOrNot = "not read yet";
        }else{
            readOrNot = "has been read";
        }
        return title + " by " + author + ", " + pages+ " pages, " + readOrNot;
    };
}

function addBookToLibrary(title,author,pages,haveRead){
    const book = new Book(title,author,pages,haveRead);
    myLibrary.push(book);
}

function displayBooks(){
    for(let i = 0; i< myLibrary.length;i++){
        const book = document.createElement("div");
        book.classList.add("book");

        const title = document.createElement("div");
        title.classList.add("title");
        title.innerText = myLibrary[i].title;

        const author = document.createElement("div");
        author.classList.add("author");
        author.innerText = myLibrary[i].author;

        const pages = document.createElement("div");
        pages.classList.add("pages");
        pages.innerText = myLibrary[i].pages + " pages";

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        container.appendChild(book);
    }
}


newBookButton.addEventListener("click",()=>{
    dialog.showModal();
});

bookForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const haveRead = document.querySelector('input[name="read"]:checked').value;
    addBookToLibrary(title,author,pages,haveRead);
    displayBooks();
    dialog.close();
});
displayBooks();