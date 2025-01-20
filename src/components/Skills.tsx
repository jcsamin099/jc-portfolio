import "./Skills.css";

const Skills = () => {
  const languages = [
    { id: 1, name: "./images/🦆 icon _file type html_.png" },
    { id: 2, name: "./images/🦆 icon _file type css_.png" },
    { id: 3, name: "./images/🦆 icon _file type js official_.png" },
    { id: 4, name: "./images/🦆 icon _file type reactjs_.png" },
    {id: 5, name: "./images/🦆 icon _file type java_.png"}
  ];
  const listOfSkills = languages.map((language) => (
    <img src={language.name} key={language.id} className="skills-images" />
  ));
  return (
    <>
      <div className="skills-container">
        <h2 className="skills-h2">Skills</h2>
        <h1>What am I capable of?</h1>
        <div className="skills-image-container">{listOfSkills}</div>
      </div>
    </>
  );
};

export default Skills;
