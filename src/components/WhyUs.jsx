import { Container, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const WhyUs = () => {
  return (
    <>
      <Card className="shadow rounded-0 text-center border-1 why-us">
        <Card.Body>
          <Card.Title className="why-us-card-content">
            Why Choose BOTSPOT AI? We’re so glad you asked !
          </Card.Title>
          {/* <Card.Text> */}
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                <button type="button" className="why-us-button1">
                  <span className="why-us-btn-text"> GET STARTED TODAY</span>
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    style={{
                      width: "25px",
                      height: "25px",
                      position: "absolute",
                      marginTop: "0px",
                      marginLeft: "3px",
                    }}
                  />
                </button>
                <button type="button" className="why-us-button2">
                  <span className="why-us-btn-text">OUR SERVICES</span>
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    style={{
                      width: "25px",
                      height: "25px",
                      position: "absolute",
                      marginTop: "0px",
                      marginLeft: "3px",
                    }}
                  />
                </button>
              </div>
              <div className="col-sm-4"></div>
            </div>
          {/* </Card.Text> */}
        </Card.Body>
        <Card.Body>
          <Card.Text>
            <Container style={{ marginTop: "-10px" }}>
              Botsopot AI offers our customer a wealth of technical and business
              expertise. We create diverse, complex, web and mobile solutions
              for any busness need. Our knowledge and experience transkate to
              added value and peace of mind for our customer.
            </Container>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default WhyUs;
