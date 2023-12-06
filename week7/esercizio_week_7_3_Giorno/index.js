document.addEventListener('DOMContentLoaded', function () {
  const bookListContainer = document.getElementById('books');

  fetch('https://striveschool-api.herokuapp.com/books')
      .then(response => response.json())
      .then(data => {
          data.forEach(book => {
              const card = createBookCard(book);
              bookListContainer.appendChild(card);
          });
      });

  function createBookCard(book) {
      const card = document.createElement('div');
      card.classList.add('col-md-4', 'mb-4');

      card.innerHTML = `
          <div class="card w-75">
              <img src="${book.img}" class="card-img-top" alt="${book.title}">
              <div class="card-body">
                  <h5 class="card-title">${book.title}</h5>
                  <p class="card-text">Prezzo: ${book.price} €</p>
                  <button class="btn btn-danger" onclick="removeCard(this)">Scarta</button>
              </div>
          </div>
      `;

      return card;
  }

  window.removeCard = function (button) {
      const card = button.closest('.col-md-4');
      card.remove();
  };
});