import "./Contacts.css";

const Contacts = () => {
  return (
    <>
      <div className="contacts-container">
        <div className="contact information">
          <h2 className="contact-h2">Contacts</h2>
          <h1>Get in touch</h1>
          <p>juliusceasarsamin@gmail.com</p>
          <div className="contact-images">
            <a href="https://github.com/jcsamin099" target="_blank">
              <img src={"./images/Github.png"} alt="" className="contact-image"/>
            </a>
            <a
              href="https://www.facebook.com/juliusceasar.samin/?viewas=&should_open_composer=false&show_switched_toast=false&show_invite_to_follow=false&show_switched_tooltip=false&show_podcast_settings=false&show_community_review_changes=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true"
              target="_blank"
            >
              <img src={"./images/Facebook.png"} alt="" className="contact-image"/>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsCTqlnbCBGNSgTrlSpsBxNTlrCzXfwMQsCtsdtTdBLvRGpNfgdzrsxdNsKGZmmKqQlKxQwg"
              target="_blank"
            >
              <img src={"./images/Vector.png"} alt="" className="contact-image"/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
