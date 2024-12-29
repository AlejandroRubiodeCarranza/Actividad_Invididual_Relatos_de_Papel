const useRemoveFromCart = (bookId,cart,setCart) => {
    setCart(cart.filter(book => book.id !== bookId));
  };  
  export default useRemoveFromCart;