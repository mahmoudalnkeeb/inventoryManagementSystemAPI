const { search } = require("../routes/routes");

const read = document.getElementById('read');
const readOne = document.getElementById('readOne');
const create = document.getElementById('create');
const update = document.getElementById('update');
const deleteOne = document.getElementById('deleteOne');
const response = document.getElementById('response');

//

//

read.addEventListener('click', async () => {
  const res = await fetch('/products');
  const data = await res.json();
  console.log(data);
});

// alert
search.addEventListener('click', async () => {
  const res = await fetch('/products/search?');
  const data = await res.json();
  console.log(data);
});

create.addEventListener('click', async () => {
  const res = await fetch('/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'product',
      price: 15,
      taxes: 5,
      ads: 1,
      discount: 2,
      count: 20,
      category: 'products',
    }),
  });
  const data = await res.json();
  console.log(data);
});
update.addEventListener('click', async () => {
  const res = await fetch('/products/product', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'updatedproduct',
      price: 15,
      taxes: 5,
      ads: 1,
      discount: 2,
      count: 20,
      category: 'products',
    }),
  });
  const data = await res.json();
  console.log(data);
});
deleteOne.addEventListener('click', async () => {
  const res = await fetch('/products/product', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  console.log(data);
});


