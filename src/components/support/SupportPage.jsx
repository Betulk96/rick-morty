import React from 'react'
import PageHeader from '../PageHeader';
import { Button, Col, Container, Row } from 'react-bootstrap'
const SupportPage = () => {
    return (
        <>
            <PageHeader>Support</PageHeader>
            <Container className="text-center my-5 " fluid >

                <Row className="justify-content-md-center">
                    <Col md={12} className='rounded-1 p-3'>
                        <Button
                            variant="light"
                            href="https://rickandmortyapi.com/support-us"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                           Rick and Morty Support
                        </Button>

                    </Col>
                    <Col>
                        <Button
                            variant="secondary"
                            href="mailto:96betul@gmail.com"
                        >
                            Send Email To Developer
                        </Button>
                    </Col>

                </Row>

            </Container>
        </>
    )
}

export default SupportPage;
