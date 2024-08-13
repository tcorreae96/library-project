const myLibrary = [];
const booksSel = document.querySelector(".books");
const form = document.querySelector("form");

form.addEventListener("submit", addNewBook);

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;

	this.info = function() {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
	}
}

function addBookToLibrary(title, author, pages, read) {
	const newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);
};

function displayBooks() {
	myLibrary.forEach((book) => {
		booksSel.appendChild(createCard(book));
	})
}

function displayNewBook(newBook) {
	booksSel.appendChild(createCard(newBook));
}

function createCard(book) {
	let newCard = document.createElement("div");
	newCard.classList.add("card");
	newCard.innerText = book.info();
	return newCard;
}

displayBooks();

function addNewBook(e) {
	e.preventDefault();
	const formData = new FormData(document.querySelector("form"));
	const newBook = new Book(formData.get("title"), formData.get("author"), formData.get("pages"), formData.get("read") === "on" ? true : false);
	myLibrary.push(newBook);
	displayNewBook(newBook);
}