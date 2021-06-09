import "./App.css";
import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import CardList from "./components/CardList";
import banner from "./img/banner.jpg";
function App() {
  return (
    <>
      <Header img={banner}></Header>
      <div class="App-Container">
        <CardList> </CardList>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
