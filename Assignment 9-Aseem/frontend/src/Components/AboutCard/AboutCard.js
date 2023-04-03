import React from "react";
import { Card, Container, Button } from "react-bootstrap";

const AboutCard = (props) => {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src={image} /> */}
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.title}</Card.Text>
          <Button variant="primary">Click to know more</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutCard;
