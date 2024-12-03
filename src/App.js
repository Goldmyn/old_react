// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const App = () => {
  const firstName = "John"; // Change this to your first name or leave it as an empty string
  const greeting = firstName ? `Hello, ${firstName}!` : "Hello, there!";

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col md={6} className="mb-4">
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
      <h4 className="mt-4">{greeting}</h4>
      {firstName && (
        <img
          src="https://via.placeholder.com/50"
          alt="Your Avatar"
          className="rounded-circle mt-3"
        />
      )}
    </Container>
  );
};

export default App;
