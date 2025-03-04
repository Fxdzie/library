const myLibrary = [];
const container = document.querySelector(".container");

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

addBookToLibrary(1,2,3,"no");
addBookToLibrary(1,2,3,"yes");
console.log(myLibrary);
displayBooks();