import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';


const useAddtoCart = (book,setCart) => {
    setCart(prevCart => [...prevCart, book]);
  };

  export default useAddtoCart;