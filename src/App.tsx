import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

const App = () => {
  const buttons = [
    { id: 1, name: "Home", src: "./components/Home.tsx"},
    { id: 2, name: "About", src: "./components/About.tsx"},
    { id: 3, name: "Skill" },
    { id: 4, name: "Project" },
    { id: 5, name: "Contact" },
  ];
  const setOfButtons = buttons.map((button) => (
    <a href={"button.src"} key={button.id} className="app-buttons">
      {button.name}
    </a>
  ));
  return (
    <>
      <div className="navbar-container">
        <span className="app-h1"><h1>Julius</h1></span>
        <div className="setOfButtons">{setOfButtons}</div>
      </div>
      <Home />
      <About />
      <Skills />
      <Contacts />
    </>
  );
};

export default App;
