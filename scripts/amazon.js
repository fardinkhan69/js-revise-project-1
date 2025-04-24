import { cart,addToCart } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';

let productsHTML = '';




products.forEach((proudct) => {
    //extracting the values from the object
    const { image, name, rating, priceCents, id } = proudct;

    productsHTML += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="${image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                ${rating.count}
                </div>
            </div>

            <div class="product-price">
                $${formatCurrency(priceCents)}
            </div>

            <div class="product-quantity-container">
                <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${id}">
            
                Add to Cart
            </button>
            </div>
    `;

});


const productsGrid = document.querySelector('.js-products-grid');

productsGrid.innerHTML = productsHTML;



function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    })

    document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            //add the product to the cart
            const productId = button.dataset.productId; // Corrected variable name
            //check if the product is already in the cart

            addToCart(productId);

            updateCartQuantity();



        })
    })