"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import "./propertiesdetail-card.scss"
import SameCharacter from './SameCharacter';
import Spacer from '../Spacer';
import PageHeader from '../PageHeader';

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
       <PageHeader>Characters Details</PageHeader>
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Card>
            <Row className="justify-content-center">
              <Col md={4} className="image-container">
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
                    <strong>Origin:</strong> {property.origin.name}<br />
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
      <Spacer  />

      <SameCharacter property={property} />
      <Spacer  />
    </Container>
  );
};

export default PropertyDetails;
