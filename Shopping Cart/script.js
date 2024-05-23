document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.querySelector('.close');
    const checkoutButton = document.querySelector('.checkout');
    const cartTab = document.querySelector('.cartTab');
    const addCartButtons = document.querySelectorAll('.addCart');
    const cartList = document.querySelector('.listCart');
    const totalPriceElement = document.getElementById('total-price');
    const iconCart = document.querySelector('.icon-cart span');
    let cartItems = [];
    
    addCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = this.closest('.item');
            const itemName = item.querySelector('h2').textContent;
            const itemPrice = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
            const itemImage = item.querySelector('img').src;

            const cartItem = cartItems.find(cartItem => cartItem.name === itemName);

            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                cartItems.push({ name: itemName, price: itemPrice, quantity: 1, image: itemImage });
            }

            updateCart();
        });
    });

    function updateCart() {
        cartList.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            total += item.price * item.quantity;

            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'item';

            cartItemElement.innerHTML = `
                <div class="image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="name">
                    ${item.name}
                    <div class="quantity">
                        <button class="quantity-btn minus">-</button>
                        <input type="text" value="${item.quantity}" readonly>
                        <button class="quantity-btn plus">+</button>
                    </div>
                </div>
                <div class="actions">
                    <button class="heart">❤️</button>
                    <button class="delete">DELETE</button>
                </div>
            `;

            cartList.appendChild(cartItemElement);

            cartItemElement.querySelector('.plus').addEventListener('click', function() {
                item.quantity += 1;
                updateCart();
            });

            cartItemElement.querySelector('.minus').addEventListener('click', function() {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    updateCart();
                }
            });

            cartItemElement.querySelector('.delete').addEventListener('click', function() {
                cartItems = cartItems.filter(cartItem => cartItem.name !== item.name);
                updateCart();
            });

            cartItemElement.querySelector('.heart').addEventListener('click', function() {
                this.classList.toggle('favorited');
            });
        });

        totalPriceElement.textContent = `$${total.toFixed(2)}`;
        iconCart.textContent = cartItems.length;
    }

    closeButton.addEventListener('click', function() {
        cartTab.style.display = 'none';
    });

    iconCart.parentElement.addEventListener('click', function() {
        cartTab.style.display = 'block';
    });

    checkoutButton.addEventListener('click', function() {
        alert('Proceeding to checkout');
        // Add checkout process code here
    });
});






