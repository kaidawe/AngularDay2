import './App.css';
import { useState } from 'react';


function App() {

  const [cart, setCart] = useState([])

const products =["Violin","Coffee","Horse","House","Daughter"]

  function addToCart(e) {
    const productsToAdd = document.getElementById("productsToAdd").value;
    const newCart = [...cart]
    newCart.push(productsToAdd);
    setCart(newCart);
  }

  function fullCart() {
    return(
      <ul>
        {cart.map((item,i) => (
          <li key ={i}> {item}</li>
        ))}
      </ul>

    )
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Shopping Cart
        </h1>

        <p>Products: </p>
        <select id="productsToAdd">
        {products.map((item,i) => {return <option key={i}>{item}</option>})}
        </select>

        <button onClick={addToCart}>Add products</button>

        <div className ="cart-items">
          {fullCart()}
        </div>

      </header>
    </div>
  );
}

export default App;
