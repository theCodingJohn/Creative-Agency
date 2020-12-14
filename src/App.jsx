import React from "react";
import Nav from './components/Nav/Nav';
import Hero from "./components/Hero/Hero";

// styles
import "./app.css";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero/>
      </main>
    </>
  );
}

export default App;
