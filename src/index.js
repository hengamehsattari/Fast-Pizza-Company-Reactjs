import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast Pizza Company</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const pizzaNum = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaNum > 0 && (
        <>
          <p>
            Authentic Italian Cuisine. 6 creative dishes to choose from, All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

function Pizza(props) {
  const { name, photoName, price, ingredients, soldOut } = props.pizzaObj;
  return (
    <li className={`pizza ${soldOut?"sold-out":""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut?"SOLD OUT":price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We 're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
      <p>Instagram Page for training: @hengameh.chef</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


