const elements = document.querySelectorAll('product-element');

elements.forEach((element) => {
  element.addEventListener(
    'click',
    UPDATE_DATABASE_DATA(element.getAttribute('data-id'))
  );
});
