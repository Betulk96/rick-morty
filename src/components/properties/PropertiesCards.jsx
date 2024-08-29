import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PropertiesCards = ({ properties }) => {
  if (!properties || properties.length === 0) {
    return <p>No characters found.</p>;
  }

  return (
    <Container>
      <Row>
        {properties.map((character) => (
          <Col key={character.id} sm={12} md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={character.image} alt={character.name} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                  <strong>Status:</strong> {character.status} <br />
                  <strong>Species:</strong> {character.species} <br />
                  <strong>Type:</strong> {character.type || 'Unknown'} <br />
                  <strong>Gender:</strong> {character.gender} <br />
                  <strong>Location:</strong> {character.location.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PropertiesCards;
