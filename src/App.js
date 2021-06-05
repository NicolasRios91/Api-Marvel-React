import "./App.css";
import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import CardList from "./components/CardList";

function App() {
  return (
    <>
      <Header></Header>
      <div class="App-Container">
        <CardList> </CardList>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
