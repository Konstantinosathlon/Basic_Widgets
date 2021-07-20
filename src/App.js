import React, { useState } from "react";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Router from "./components/Router";
import Header from "./components/Header";

const items = [
  {
    title: "Purpose of Wiki-Search?",
    content: "To perform searches on Wikipedia and displaying snippets of multiple results.",
  },
  {
    title: "Purpose of Translator?",
    content: "To translate english text to Greek, Italian, Spanish or Dutch.",
  },
  {
    title: "Author?",
    content: "Kons Stav.",
  },
];

const App = () => {
  
  return (
    <div>
      <Header />
      <Router path = {"/"}>
        <h3 style={{color: "black", padding: "10px 12px"}} >Welcome to Basic Widgets, click an option to begin.</h3>
      </Router>
      <Router path={"/list"}>
        <Search />
      </Router>
      
      <Router path={"/translate"}>
        <Translate />
      </Router>
    </div>
  );
};
export default App;
