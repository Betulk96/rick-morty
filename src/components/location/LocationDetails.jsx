"use client"
import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Loading from '@/app/loading';
import Spacer from '@/components/Spacer';
import { getCharacterById } from '@/services/characters-service';
import CustomPagination from '@/helpers/pagination';
import { useRouter } from 'next/navigation';
import "./locationcard.scss";
import PageHeader from '../PageHeader';


const LocationDetails = ({ property }) => {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const router = useRouter();
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchResidents = async () => {
      const start = (page - 1) * itemsPerPage;
      const end = page * itemsPerPage;

      const residentIds = property.residents.slice(start, end).map(url => {
        const urlParts = url.split('/');
        return urlParts[urlParts.length - 1]; // Extract ID from URL
      });

      try {
        const residentPromises = residentIds.map(id => getCharacterById(id));
        const residentData = await Promise.all(residentPromises);
        setResidents(residentData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching residents", err);
        setLoading(false);
      }
    };

    if (property && property.residents.length > 0) {
      fetchResidents();
    } else {
      setLoading(false);
    }
  }, [property, page]);

  if (loading) {
    return <Loading />;
  }

  const totalPages = Math.ceil(property.residents.length / itemsPerPage);

  const handleCardClick = (event, id, name) => {
    if (event.target.closest('.clickable')) {
      return;
    }
    router.push(`/character/${id}/${name}`);
  };

  return (
    <Container>
      <PageHeader>{property.name} Details</PageHeader>
      <Spacer height={30} />
      <Row className="justify-content-center mt-4">
        <Col md={8} className=''>
          <Card>
            <Row>
              <Col md={3}>
                <div className="d-flex justify-content-center align-self-center ">
                  <img src="https://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/128/venus-icon.png" width="128" height="128"></img>
                </div>
              </Col>
              <Col className="ps-5 align-self-center" md={9}>
                <Card.Body>
                  <Card.Title> {property.name}</Card.Title>
                  <Card.Text>
                    <strong>Type:</strong> {property.type} <br />
                    <strong>Dimension:</strong> {property.dimension} <br />
                    <strong>Number of Residents:</strong> {property.residents.length}<br />
                    <strong>Location created on:</strong> {new Date(property.created).toLocaleDateString()}
                  </Card.Text>
                </Card.Body>
              </Col>

            </Row>

          </Card>
        </Col>
        <Col md={8}>

        </Col>
      </Row>

      <Row className="mt-4">
        {residents.map(resident => (
          <Col key={resident.id} md={3} className="mb-4">
            <Card onClick={() => handleCardClick(event, resident.id, resident.name)} className="resident-card">
              <div className="img-container">
                <Card.Img variant="top" src={resident.image} alt={resident.name} className='card-img' />
                <div className="img-title">
                  <Card.Title className="title">{resident.name}</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>


      <CustomPagination
        totalPages={totalPages}
        currentPage={page}
        onPageChange={setPage}
      />
    </Container>
  );
};

export default LocationDetails;
