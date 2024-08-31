import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import "./about.scss"
import PageHeader from '../PageHeader'

const AboutPage = () => {
    return (
        <>
            <PageHeader>About Rick&Morty</PageHeader>
            <Container className="about-page">

                <Row className="section1 align-items-center ">
                    <Col className='ps-0' md={4}>
                        <Image src="/images/about1.jpg" className="about-image">

                        </Image>
                    </Col>
                    <Col md={8}>
                        <h1>About Rick and Morty</h1>
                        <p>
                            <strong>Rick and Morty</strong> is an American animated science fiction sitcom created by Justin Roiland and Dan Harmon. The show first premiered on December 2, 2013, on Adult Swim, and quickly gained a massive following due to its unique blend of dark humor, science fiction, and philosophical themes.
                        </p>
                    </Col>
                </Row>

                <h2 className='mt-5' >Main Characters</h2>

                <Row className='mt-3'>
                    <Col md={2}>
                        <Image src="/images/about/rick.jpg" className="main-image" />

                    </Col>
                    <Col md={6} className='description' >
                        <strong>Rick Sanchez</strong>: A genius scientist with a cynical view of the universe. Rick is known for his reckless behavior, which often puts him and his family in precarious situations.
                    </Col>

                </Row>

                <Row className='mt-3'>
                    <Col md={2}>
                        <Image src="/images/about/morty.png" className="main-image" />

                    </Col>
                    <Col md={6} className='description'>
                        <strong>Morty Smith</strong>: Rick's 14-year-old grandson, who is frequently dragged along on his grandpa's insane escapades. Morty is a kind-hearted, albeit somewhat naive, young boy who often serves as the moral compass of the duo.
                    </Col>

                </Row>

                <Row className='mt-3'>
                    <Col md={2}>
                        <Image src="/images/about/summer.png" className="main-image" />

                    </Col>
                    <Col md={6} className='description'>
                        <strong>Summer Smith</strong>: Morty's older sister, who becomes increasingly involved in Rick and Morty's adventures as the series progresses. Summer is strong-willed and independent, often challenging Rick's authority.
                    </Col>

                </Row>

                <Row className='mt-3'>

                    <Col md={2}>
                        <Image src="/images/about/beth.png" className="main-image" />

                    </Col>
                    <Col md={6} className='description'>
                        <strong>Beth Smith</strong>: Rick's daughter and Morty and Summer's mother. Beth is a talented horse surgeon who struggles with the emotional complexities of her relationship with her father.
                    </Col>

                </Row>

                <Row className='mt-3'>

                    <Col md={2}>
                        <Image src="/images/about/jerry.png" className="main-image" />

                    </Col>
                    <Col md={6} className='description'>
                        <strong>Jerry Smith</strong>: Beth's husband and the often ridiculed father of Morty and Summer. Jerry is insecure and frequently at odds with Rick, who views him as weak and unintelligent.
                    </Col>
                </Row>
                <Row className="section2 mt-3">
                    <h2>Plot Overview</h2>
                    <p>
                        The series follows the misadventures of an eccentric, alcoholic scientist named <strong>Rick Sanchez</strong> and his good-hearted but easily influenced grandson <strong>Morty Smith</strong>. Together, they embark on dangerous, bizarre, and often morally questionable adventures across the multiverse. The dynamic between Rick's nihilistic worldview and Morty's innocent perspective provides much of the show's comedic and dramatic tension.
                    </p>

                </Row>


                <Row>
                    <h2>Themes and Influence</h2>
                    <p>
                        Rick and Morty explores complex themes such as the meaning of existence, the nature of reality, and the consequences of scientific exploration. The show is known for its existentialist undertones, often highlighting the absurdity and randomness of life in a vast, indifferent universe. Despite its often bleak themes, the series balances dark humor with moments of emotional depth and character development.
                    </p>

                </Row>
                <Row>
                    <h2>Impact and Legacy</h2>
                    <p>
                        Since its debut, Rick and Morty has become a cultural phenomenon, influencing numerous other TV shows, movies, and even video games. Its unique style and storytelling have earned it a devoted fanbase and critical acclaim. The show has won several awards, including a Primetime Emmy Award for Outstanding Animated Program.
                    </p>

                </Row>
                <Row>
                    <h2>Fun Facts</h2>
                    <ul>
                        <li>The character of Rick Sanchez was loosely inspired by Doc Brown from the Back to the Future franchise.</li>
                        <li>Justin Roiland voices both Rick and Morty, showcasing his impressive range as a voice actor.</li>
                        <li>The series has spawned numerous fan theories, some of which have even been acknowledged by the show's creators.</li>
                    </ul>
                </Row>


            </Container>
        </>

    )
}

export default AboutPage
