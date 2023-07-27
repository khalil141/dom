const cartItems = [
    { id: 1, name: "Item 1", price: 10, quantity: 1, liked: false },
    { id: 2, name: "Item 2", price: 15, quantity: 2, liked: true },
    // Add more items to the cart as needed
  ];
  
  const cartList = document.getElementById("cart-items");
  const totalPriceSpan = document.getElementById