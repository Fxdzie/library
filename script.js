const myLibrary = [];
const container = document.querySelector(".container");
const newBookButton = document.querySelector(".new-book");
const dialog = document.querySelector(".dialog");
const resetButton = document.querySelector(".reset");
const bookForm = document.querySelector("#form");
const closeButton = document.querySelector("#close");
const submitButton = document.querySelector("#sub");

function Book(title,author,pages,haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;

    if(haveRead==="not read"){
        this.haveRead ="No";
    }else{
        this.haveRead ="Yes";
    }
    
}

Book.prototype.switchRead = function() {
    if(this.haveRead==="Yes"){
        this.haveRead= "No";
    }else{
        this.haveRead = "Yes";
    }
};

const refresh = ()=>{
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
};

function addBookToLibrary(title,author,pages,haveRead){
    const book = new Book(title,author,pages,haveRead);
    myLibrary.push(book);
}

function displayBooks(){
    for(let i = 0; i< myLibrary.length;i++){
        const book = document.createElement("div");
        book.classList.add("book");
        book.id = `${i}`;

        const title = document.createElement("div");
        title.classList.add("title");
        title.innerText = myLibrary[i].title;

        const author = document.createElement("div");
        author.classList.add("author");
        author.innerText = myLibrary[i].author;

        const pages = document.createElement("div");
        pages.classList.add("pages");
        pages.innerText = myLibrary[i].pages + " pages";

        const haveRead = document.createElement("div");
        haveRead.classList.add("read");
        haveRead.innerText = "Read : " + myLibrary[i].haveRead;

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove");
        removeButton.innerText = "Remove Book";
        removeButton.addEventListener("click",(e)=>{
            let num = e.target.getAttribute("id");
            myLibrary.splice(Number(num),1);
            refresh();
            displayBooks();
        });

        const changeButton = document.createElement("button");
        changeButton.classList.add("change");
        changeButton.innerText = "Change Read Status";
        changeButton.addEventListener("click",(e)=>{
            let tempBook = myLibrary[Number(e.target.getAttribute("id"))];
            tempBook.switchRead();
            refresh();
            displayBooks();
        });

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(haveRead);
        book.appendChild(changeButton);
        book.appendChild(removeButton);
        container.appendChild(book);
    }
}


newBookButton.addEventListener("click",()=>{
    dialog.showModal();
});

submitButton.addEventListener("click",(e)=>{
    e.preventDefault();
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const haveRead = document.querySelector('input[name="read"]:checked').value;
    addBookToLibrary(title.value,author.value,pages.value,haveRead);
    refresh();
    displayBooks();
    dialog.close();
    bookForm.reset();
});

displayBooks();