import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content-left">
          <div className="home-context-left">
            <h3 className="home-h2">Hi everyone, I am</h3>
            <h1>Julius Ceasar Samin</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
              vitae obcaecati libero, rem eos perspiciatis in cumque accusantium
              fuga quae voluptas explicabo magnam eaque maxime esse sed
              reiciendis ducimus nemo.
            </p>
          </div>
        </div>
        <div className="home-content-right">
          <img src={"./images/myprofilepic-bg.png"} alt="" className="home-image"/>
        </div>
      </div>
    </>
  );
};

export default Home;
