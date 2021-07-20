import Search from "./components/Search";
import Translate from "./components/Translate";
import Router from "./components/Router";
import Header from "./components/Header";

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
