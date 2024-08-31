"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaSkull, FaQuestionCircle, FaCheckCircle } from 'react-icons/fa';
import "./card.scss";
import PageHeader from '../PageHeader';

const PropertiesCards = ({ properties }) => {
  const router = useRouter();

  if (!properties || properties.length === 0) {
    return <p>No characters found.</p>;
  }

  const handleCardClick = (event, id, name) => {
    if (event.target.closest('.clickable')) {
      return;
    }
    router.push(`/character/${id}/${name}`);
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
     
      <Row>
        {properties.map((character) => (
          <Col key={character.id} sm={12} md={4} lg={3} className="mb-4">
            <Card className="character-card h-100" onClick={() => handleCardClick(event, character.id, character.name)}>
              <div className="img-container">
                <Card.Img variant="top" src={character.image} alt={character.name} className='card-img' />
                <div className="img-title">
                  <Card.Title className='title'>{character.name}</Card.Title>
                </div>
              </div>

              <Card.Body>
                <Card.Text>
                  <strong>Status:</strong>
                  <span className={`clickable status ${character.status.toLowerCase()}`} onClick={() => handleFieldClick('status', character.status)}>
                    &nbsp;{character.status} {renderStatusIcon(character.status)}
                  </span>
                  <br />
                  <strong>Species:</strong> <span className="clickable" onClick={() => handleFieldClick('species', character.species)}>{character.species}</span> <br />
                  <strong>Type:</strong> <span className="clickable" onClick={() => handleFieldClick('type', character.type || 'Unknown')}>{character.type || 'Unknown'}</span> <br />
                  <strong>Gender:</strong> <span className="clickable" onClick={() => handleFieldClick('gender', character.gender)}>{character.gender}</span> <br />
                  <strong>Location:</strong> <span>{character.location.name}</span>
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
