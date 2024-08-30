"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import "./propertiesdetail-card.scss"

const PropertyDetails = ({ property }) => {
  const router = useRouter();

  if (!property) {
    return <p>No character details available.</p>;
  }

  const handleLocationClick = () => {
    const locationUrlParts = property.location.url.split('/');
    const locationId = locationUrlParts[locationUrlParts.length - 1];
    const locationName = property.location.name;

    router.push(`/location/${locationId}/${locationName}`);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Card>
            <Row>
              <Col md={4}>
                <Card.Img variant="left" src={property.image} alt={property.name} />
              </Col>
              <Col className="ps-5 align-self-center" md={8}>
                <Card.Body>
                  <Card.Title>{property.name}</Card.Title>
                  <Card.Text>
                    <strong>Status:</strong> {property.status} <br />
                    <strong>Species:</strong> {property.species} <br />
                    <strong>Type:</strong> {property.type || 'Unknown'} <br />
                    <strong>Gender:</strong> {property.gender} <br />
                    <strong>Origin:</strong> <a href={property.origin.url} target="_blank" rel="noopener noreferrer">{property.origin.name}</a> <br />

                    <strong>Location:</strong> <a className="clickable-link" onClick={handleLocationClick}>{property.location.name}</a> <br />
                    <strong>Episodes:</strong> {property.episode.length} episodes
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
            <Card.Footer className="text-muted justify-content-end">
              <small>Character created on: {new Date(property.created).toLocaleDateString()}</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyDetails;
