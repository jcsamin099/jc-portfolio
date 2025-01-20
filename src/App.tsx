import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

const App = () => {
  const buttons = [
    { id: 1, name: "Home", target: "#home" },
    { id: 2, name: "About", target: "#about" },
    { id: 3, name: "Skills", target: "#skills" },
    { id: 4, name: "Projects", target: "#projects" },
    { id: 5, name: "Contact", target: "#contact" },
  ];

  const setOfButtons = buttons.map((button) => (
    <a href={button.target} key={button.id} className="app-buttons">
      {button.name}
    </a>
  ));

  return (
    <>
      <div className="navbar-container">
        <span className="app-h1">
          <h1>Julius</h1>
        </span>
        <div className="setOfButtons">{setOfButtons}</div>
      </div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">{/* Add your Projects section content here */}</div>
      <div id="contact">
        <Contacts />
      </div>
    </>
  );
};

export default App;
