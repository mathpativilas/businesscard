import "./Header.css";
import Pic from "../images/prof.jpg";
const email = document.querySelector(".link-btn");

function Header(props) {
  function clickemail() {
    window.location.href = "https://www.gmail.com";
  }

  function clicklinkden() {
    window.location.href = "https://www.linkedin.com";
  }

  return (
    <div className="top-header">
      <img src={Pic} className="profpic" alt="pic"></img>
      <div className="details">
        <h3>Vilas Mathpati</h3>
        <p className="first-para">Frontend Developer</p>
        <p className="second-para">Atechy Technologies</p>
      </div>
      <div className="btn-container">
        <button
          className="email-btn"
          onClick={clickemail}
          //   onClick={(window.location.href = "https://www.gmail.com")}
        >
          <i class="fa-solid fa-envelope"></i> Email
        </button>
        <button className="link-btn" onClick={clicklinkden}>
          <i class="fa-brands fa-linkedin"></i>Linkden
        </button>
      </div>
    </div>
  );
}

export default Header;
