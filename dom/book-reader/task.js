const bookControl = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');
console.log(bookControl);
console.log(book);


bookControl.forEach(item => item.addEventListener('click', (event) => {
    event.preventDefault();

    bookControl.forEach(elem => elem.classList.remove("font-size_active"));

    if (item.classList.contains('font-size_small')) {
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small')
    } else if (item.classList.contains('font-size_big')) {
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big')
    } else {
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big')
    };

    item.classList.add('font-size_active')
}))
