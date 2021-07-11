import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
// import Dropdown from "./components/Dropdown";
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

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Router path = {"/"}>
        <Accordion items = {items}/>
      </Router>
      <Router path={"/list"}>
        <Search />
      </Router>
      {/* <Router path={"/dropdown"}>
        {/* <Dropdown
        label="Select a color"
        onSelectedChange={setSelected}
        selected={selected}
        options={options}/>
      </Router> */}
      <Router path={"/translate"}>
        <Translate />
      </Router>
    </div>
  );
};
export default App;
