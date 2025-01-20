import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content-left">
          <img src={"./images/Code typing-amico 1.png"} alt="" className="about-content-image"/>
        </div>
        <div className="about-content-right">
          <div className="about-context-right">
            <h2 className="about-h2">About</h2>
            <h1>About Me</h1>
            <p className="about-p">
              Lorem ipsum dolor sit amet consectetur. Iaculis diam augue a
              adipiscing non aliquet. Leo semper lacus fringilla consectetur
              cras ac ullamcorper ut. Risus nunc diam accumsan feugiat.
              Tristique diam consectetur aliquam vitae suspendisse vel leo. Nec
              quisque senectus laoreet id pulvinar id vulputate. Montes
              consectetur diam non aliquam nunc maecenas non. Molestie pretium
              amet id dictum vitae nam vel sit. Rhoncus massa velit ut amet
              massa morbi eget.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
