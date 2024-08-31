import React from 'react'
import PageHeader from '../PageHeader'
import { Button, Col, Container, Row } from 'react-bootstrap'

const DocumentionPage = () => {
    return (
        <>
            <PageHeader>Documentation</PageHeader>
            <Container className="text-center my-5 " fluid >

                <Row className="justify-content-md-center">
                    <Col md={6} className='bg-primary rounded-1 p-3'> <p>
                        This project utilizes the <strong>Rick and Morty API</strong> to fetch data about characters, locations, and episodes from the popular animated series.
                    </p>
                        <p>
                            The API provides a wide range of endpoints to explore detailed information about the Rick and Morty universe, allowing us to create dynamic and interactive features.
                        </p>
                        <p>
                            For more information on how to use the Rick and Morty API, please visit the official documentation.
                        </p>
                        <Button
                            variant="light"
                            href="https://rickandmortyapi.com/documentation"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit Rick and Morty API Documentation
                        </Button>
                    </Col>

                </Row>

            </Container>
        </>
    )
}

export default DocumentionPage
