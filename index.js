// This function fetches the books and passes the data to renderBooks
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json()) // Convert the response to JSON
    .then(books => {
      renderBooks(books); // Call renderBooks with the fetched books
    })
    .catch(error => console.error('Error fetching books:', error)); // Handle errors
}

// This function renders the books into the DOM
function renderBooks(books) {
  // Select the main element or the list where you want to display the books
  const booksList = document.getElementById('books-list');

  if (!booksList) {
    console.error("No element found with id 'books-list'");
    return;
  }

  booksList.innerHTML = ''; // Clear the list before appending new items

  books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = book.name; // Set the text content to the book's name
    console.log('Appending book:', book.name);
    booksList.appendChild(li); // Append the list item to the booksList
  });
}

// Ensure the DOM is fully loaded before calling fetchBooks
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
