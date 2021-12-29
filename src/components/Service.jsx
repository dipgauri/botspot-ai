import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingUsd,
  faHeartbeat,
  faHammer,
  faShoppingCart,
  faUserGraduate,
  faLightbulb,
  faTheaterMasks,
  faBusAlt,
} from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <>
      <div className="row  mt-5 d-flex justify-content-around text-center">
        <Card
          className="service-card"
          style={{
            width: "18rem",
            border: "3px solid #CE70FF",
            borderRadius: "10px",
          }}
        >
          <Card.Body>
            <Card.Text>
              <FontAwesomeIcon
                className="service-icon"
                color="#FF00B8"
                icon={faHandHoldingUsd}
              />
              <br />
              Finance and Insurance
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="service-card"
          style={{
            width: "18rem",
            border: "3px solid #CE70FF",
            borderRadius: "10px",
          }}
        >
          <Card.Body>
            <Card.Text>
              <FontAwesomeIcon
                className="service-icon"
                color="#C72727"
                icon={faHeartbeat}
              />
              <br />
              Healthcare
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="service-card"
          style={{
            width: "18rem",
            border: "3px solid #CE70FF",
            borderRadius: "10px",
          }}
        >
          <Card.Body>
            <Card.Text>
              <FontAwesomeIcon
                className="service-icon"
                color="#808080"
                icon={faHammer}
              />
              <br />
              Construction
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="service-card"
          style={{
            width: "18rem",
            border: "3px solid #CE70FF",
            borderRadius: "10px",
          }}
        >
          <Card.Body>
            <Card.Text>
              <FontAwesomeIcon
                className="service-icon"
                color="#000000"
                icon={faShoppingCart}
              />
              <br />
              Wholesale and retail
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="row mt-3 mb-3 d-flex justify-content-around text-center">
        <Card
          className="service-card"
          style={{
            width: "18rem",
            border: "3px solid #CE70FF",
            borderRadius: "10px",
          }}
        >
          <Card.Body>
            <Card.Text>
              <FontAwesomeIcon
                className="service-icon"
                color="#248FB0"
                icon={faUserGraduate}
              />
              <br />
              Education
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="service-card"
          style={{
            width: "18rem",
            border: "3px solid #CE70FF",
            borderRadius: "10px",
          }}
        >
          <Card.Body>
            <Card.Text>
              <FontAwesomeIcon
                className="service-icon"
                color="#E4F51C"
                icon={faLightbulb}
              />
              <br />
              Energy and resources
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="service-card"
          style={{
            width: "18rem",
            border: "3px solid #CE70FF",
            borderRadius: "10px",
          }}
        >
          <Card.Body>
            <Card.Text>
              <FontAwesomeIcon
                className="service-icon"
                color="#24D2D2"
                icon={faTheaterMasks}
              />
              <br />
              Entertainment
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="service-card"
          style={{
            width: "18rem",
            border: "3px solid #CE70FF",
            borderRadius: "10px",
          }}
        >
          <Card.Body>
            <Card.Text>
              <FontAwesomeIcon
                className="service-icon"
                color="#E57105"
                icon={faBusAlt}
              />
              <br />
              Transportation
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Service;
