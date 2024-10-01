//import ClickCounter from "./ClickCounter";
//import BookList from "./components/BookList/BookList";
/*const favouriteBooks = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" }
  ];
const App = () => {
    return (
      <>
        <h1>Books of the week</h1>
        <BookList books={favouriteBooks} />
      </>
      // src/components/App.jsx
*/
/*
const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "white",
};

export const App = () => {
  return (
    <>
      <p style={alertStyles}>Please update your email!</p>
      <p style={alertStyles}>There was an error during transaction!</p>
      <p style={alertStyles}>Payment received, thank you for your purchase!</p>
    </>
  );
};

import Alert from "./components/BookList/Alert";

export const App = () => {
  return (
    <>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </>
  );
};

export default App;

const App = () => {
  const handleClick = () => {
    alert("I'm a button!");
  };
  return <button onClick={handleClick}>Click me!</button>;
};
export default App;


const App = () => {
  return <button onClick={() => alert("You clicked me!")}></button>;
};

export default App;

function App() {
  const handleClick = (evt) => {
    console.log(evt);
  };

  return (
    <>
      <button onClick={handleClick}>First button</button>
      <button onClick={(evt) => console.log(evt)}>Second button</button>
    </>
  );
}
export default App;

import { useState } from "react";

const App = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 3);
  };
  const handleReset = () => {
    setClicks(0);
  };
  const handleMinClick = () => {
    setClicks(clicks - 3);
  };
  return (
    <>
      <button onClick={handleClick}>Current: {clicks}</button>;
      <button onClick={handleReset}>Reset</button>;
      <button onClick={handleMinClick}>Current: {clicks}</button>;
    </>
  );
};
export default App;

import { useState } from "react";

function App() {
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  const handleReset = () => {
    setClicks(0);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleClick}>Current: {clicks}</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p>Now you can see me!</p>}
    </>
  );
}

export default App;


const App = () => {
  return (
    <>
      <ClickCounter />
      <ClickCounter />
    </>
  );
};
export default App;
*/
import { useState } from "react";

const ClickCounter = ({ value, onUpdate }) => {
  return <button onClick={onUpdate}>Current: {value}</button>;
};

const App = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
    </>
  );
};

export default App;
