/* ========== Products Slider =========== */
const swiper = new Swiper('.mySwiper', {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 70,
    pagination: {
        el: '.custom-pagination',
        clickable: true,
    },
    breakpoints: {
        567: {
            slidesPerView: 2,
        },
        996: {
            slidesPerView: 3,
        },
    },
});

/* ========== Fetch the Products =========== */

const getProducts = async () => {
    try {
      const results = await fetch('./data/products.json');
      const data = await results.json();
      const products = data.products;
      return products;
    } catch (err) {
      console.log(err);
    }
  };
  
  const ProductsWrapper = document.getElementById('products');
  
  window.addEventListener('DOMContentLoaded', async function () {
    let products = await getProducts();
    products = products.filter((product) => product.category === 'Dresses');
    displayProductItems(products);
    loadData();
  });
  