import { Container, Card } from "react-bootstrap";

const Serve = () => {
  return (
    <>
      <Card
        className="shadow rounded-0 border-0 text-center mt-3"
        style={{ width: "100%" }}
      >
        <Card.Body>
          <Card.Title className="why-us-card-content">Who We Serve</Card.Title>
          <Card.Text>
            <Container>
              Botspot AI serves businesses in all major sectors, providing
              exceptional software solutions for large corporation, mid-sized
              and startups. we use industry specific knowledge and custom tailor
              our products to each customer’s unique needs.
            </Container>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Serve;
