"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import "./propertiesdetail-card.scss"
import SameCharacter from './SameCharacter';
import Spacer from '../Spacer';
import PageHeader from '../PageHeader';
import { FaCheckCircle, FaQuestionCircle, FaSkull } from 'react-icons/fa';

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

  
  const handleFieldClick = (field, value) => {
    router.push(`/?${field}=${encodeURIComponent(value)}`);
  };

  const renderStatusIcon = (status) => {
    switch (status) {
      case 'Alive':
        return <FaCheckCircle className="status-icon alive " />;
      case 'Dead':
        return <FaSkull className="status-icon dead" />;
      default:
        return <FaQuestionCircle className="status-icon unknown" />;
    }
  };

  return (
    <Container>
      <PageHeader>Characters Details</PageHeader>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={10}>
          <Card className="characters-card">
            <Row >
              <Col xs={12} md={4} className="image-container">
                <Card.Img src={property.image} alt={property.name} className="property-image" />
              </Col>
              <Col className="ps-5 align-self-center " xs={12} md={8}>
                <Card.Body>
                  <Card.Title>{property.name}</Card.Title>
                  <Card.Text>
                    <strong>Status:</strong>  <span className={`clickable status ${property.status.toLowerCase()}`} onClick={() => handleFieldClick('status',property.status)}>
                    &nbsp;{property.status} {renderStatusIcon(property.status)}
                  </span> <br />
                    <strong>Species:</strong> <span className="clickable" onClick={() => handleFieldClick('species', property.species)}>{property.species}</span>  <br />
                    <strong>Type:</strong> <span className="clickable" onClick={() => handleFieldClick('type', property.type || 'Unknown')}>{property.type || 'Unknown'}</span>  <br />
                    <strong>Gender:</strong> <span className="clickable" onClick={() => handleFieldClick('gender', property.gender)}>{property.gender}</span> <br />
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
      <Spacer />

      <SameCharacter property={property} />
      <Spacer />
    </Container>
  );
};

export default PropertyDetails;
