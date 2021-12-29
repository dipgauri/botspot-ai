import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <>
      <div className="banner text-center shadow">
        <span className="text-uppercase banner-title">
          THE SOUL OF THE WORLD
        </span>
        <h3 className="text-uppercase banner-sub-title">A SIMPLE SOLUTION</h3>
        <div className="d-flex justify-content-center mt-3 mb-3">
          <div className="banner-rectangle  d-flex align-items-center justify-content-center">
            {" "}
            <FontAwesomeIcon className="play-button" icon={faPlay} />
          </div>
        </div>
        <span className="banner-content">
          For businesses and organizations - you can build communities and
          engage audiences with one easy-to-use mobile app platform.
        </span>
        <div className="row d-flex justify-content-center mt-3">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <button type="button" className="banner-button-1">
              Know More
            </button>
            <button type="button" className="banner-button-2 mb-5">
              Contact Us
            </button>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
