"use client";
import React from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import "./menu-carousel.scss"

const MenuCarousel = () => {
    const styles = {
        backgroundColor: 'black',
        height: '400px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'end',
        borderRadius: '50px',
        border: '5px solid transparent',
        backgroundImage: 'linear-gradient(black, black), linear-gradient(to right, #1AA6B8, #4a848b, #3CB141, #01BF01, #D2FF54)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'content-box, border-box',
        overflow: 'hidden',
        marginBottom: '0px',
    };

    const imageStyles1 = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'top center',
        borderRadius: '30px',
    };
    const imageStyles2 = {
        width: '100%',
        height: '100%',
        objectFit: 'top cover',
        borderRadius: '30px',
    };
    const imageStyles3 = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'top center',
        borderRadius: '30px',
    };


    return (
        <Container style={styles}>
            <Carousel indicators={false} controls={true} interval={5000} style={{ width: '100%', height: '100%' }}>
                <Carousel.Item>
                    <Image
                        src="/images/table.jpg"
                        style={imageStyles1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src="/images/carousel4.jpeg"
                        style={imageStyles2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src="/images/carousel3.jpg"
                        style={imageStyles3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default MenuCarousel;
