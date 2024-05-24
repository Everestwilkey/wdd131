document.addEventListener('DOMContentLoaded', () => {
    const books = [
        {
          id: 1,
          title: "Septimus Heap Book One: Magyk",
          date: "July 5, 2022",
          description:
            "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
          imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
          imgAlt: "Book cover for Septimus Heap 1",
          ages: "10-14",
          genre: "Fantasy",
          stars: "⭐⭐⭐⭐"
        },
        {
          id: 2,
          title: "Magnus Chase Book One: Sword of Summer",
          date: "December 12, 2021",
          description:
            "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
          imgSrc:
            "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
          imgAlt: "Book cover for Magnus Chase 1",
          ages: "12-16",
          genre: "Fantasy",
          stars: "⭐⭐⭐⭐"
        }
      ];

    const bookContainer = document.getElementById('book-container');

    books.forEach(book => {
        const bookElement = `
            <div class="book-item">
                <div class="book-meta">
                    <p><strong>${book.date}</strong></p>
                    <p>${book.ages}</p>
                    <p>${book.genre}</p>
                    <p>${book.stars}</p>
                </div>
                <div class="book-details">
                    <h2>${book.title}</h2>
                    <img src="${book.imgSrc}" alt="${book.imgAlt}" />
                    <p>${book.description} <a href="#">Read More...</a></p>
                </div>
            </div>
        `;

        bookContainer.innerHTML += bookElement;
    });
});
