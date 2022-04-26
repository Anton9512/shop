class Products {
  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    CATALOG.forEach(({ id, name, price, img }) => {
      let activeClass = ""; //для изменения стиля в кнопке
      let activeText = ""; // для изменения текста в конопке

      if (productsStore.indexOf(id) === -1) {
        activeText = "Добавить в корзину";
      } else {
        activeText = "Удалить из корзины";
        activeClass = "products-element__btn_active";
      }

      htmlCatalog += `
      <li class='products-element'>
         <span class='products-element__name'>${name}</span>
         <img class='products-element__img' src='${img}'>
         <span class='products-element__price'>⚡️  ${price.toLocaleString()} USD</span>
         <button class='products-element__btn'>${activeText}</button>
      </li>
      `;
    });

    const html = `
    <ul class='products-container'>
      ${htmlCatalog}
    </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
