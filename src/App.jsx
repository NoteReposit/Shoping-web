import React, { useState } from 'react';

import { productData } from './assets/data/pdData';

import './App.css'

function App() {
  const products = productData;

  const [cart, setCart] = useState([]);

  // add product to shopping cart
  function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  // delete products from shopping cart
  function removeFromCart(productId) {
    setCart(cart.filter(item => item.id !== productId));
  }

  // increase quantity of items to shopping cart
  function increaseQuantity(productId) {
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  }

  // reduce quantity of items in the shopping cart
  function decreaseQuantity(productId) {
    const product = cart.find(item => item.id === productId);
    if (product.quantity > 1) {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ));
    } else {
      removeFromCart(productId);
    }
  }

  // calculate total price of products 
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Handle Checkout (clear the cart)
  function handleCheckout() {
    alert('Thank you for your purchase!');
    setCart([]); // Clear the cart after checkout
  }

  // Show Product List
  function ShowProducts() {
    return (
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md p-4 rounded-xl flex justify-between items-center">
            <div>
              <div>
                <img src={product.image} alt={product.name} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="pb-3">${product.price}</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="bg-main-color text-white px-4 py-2 rounded-lg hover:bg-emerald-800"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Show Cart
  function ShowCart() {
    return (
      <div className="mt-4 space-y-4">
        {cart.length === 0 && (
          <p className="text-gray-500">There are no products in the cart.</p>
        )}

        {cart.length > 0 && cart.map((item, index) => (
          <div key={index} className="bg-second-color shadow-md p-4 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-white text-xl font-semibold mb-3">{item.name}</h3>
              <p className="text-white">
                ${item.price}
              </p>
            </div>
            <div className="flex space-x-2">
              <div className="inline-flex rounded-lg">
                <button
                  className="bg-white border rounded-md py-2 px-4 mr-2"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
                <span className="text-center w-8 py-2">{item.quantity}</span>
                <button
                  className="bg-white border rounded-md py-2 px-4 ml-2"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-white px-2 py-1 rounded hover:bg-green-200"
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-main-color">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white pb-8">Products</h2>
        <ShowProducts />

        <div className='bg-white mt-8 p-8 rounded-xl'>
          <h2 className="text-2xl font-bold tracking-tight text-black pb-8">Items in your shopping cart</h2>
          <ShowCart />

          <div className='flex justify-between items-center'>
            <h2 className="text-2xl font-bold mt-6">Total Price: ${calculateTotal()}</h2>
            <button
              className="bg-main-color text-white px-4 py-2 mt-5 rounded-lg hover:bg-emerald-800"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;