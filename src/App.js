import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const App = () => {
  const firstName = "Marius";
  const greeting = firstName ? `Hello, ${firstName}!` : "Hello, there!";

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <h4 className="mt-4 mb-3">{greeting}</h4>
      {firstName && (
        <img
          src="https://via.placeholder.com/50"
          alt="Your Avatar"
          className="rounded-circle mb-3"
        />
      )}
      <Row>
        <Col md={12} className="mb-4">
          <Card className="text-center">
            <Card.Body>
              <Image />
              <Name />
              <Price />
              <Description />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
