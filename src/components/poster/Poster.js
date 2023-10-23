import { Link } from "react-router-dom";

import woman_bg from "../../assets/image/woman_bg.png";
import "./Poster.css";
function Poster() {
  return (
    <section className="poster">
      <div className="poster-content">
        <div className="content-text">
          <div className="trend">
            <div className="line"></div>
            new trend
          </div>
          <h1 className="poster-title">autumn sale stylish <br/> <span>womens</span> </h1>
          <Link to='/' className="discover">DISCOVER MORE</Link>
        </div>
        <div>
          <img src={woman_bg} alt="no-pics" className="image"></img>
        </div>
      </div>
    </section>
  );
}

export default Poster;
