import React from 'react';
import { Container, Image } from 'react-bootstrap';

const MenuCarousel = () => {

    const styles = {
        backgroundColor: 'black', // İç arka plan rengi
        height: '40vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'end',
        borderRadius: '50px', // Köşeleri yuvarlak yapar
        border: '5px solid transparent', // Şeffaf bir sınır
        backgroundImage: 'linear-gradient(black, black), linear-gradient(to right, #1AA6B8, #4a848b, #3CB141, #01BF01, #D2FF54)', // Kenarlar için degrade sınır
        backgroundOrigin: 'border-box',
        backgroundClip: 'content-box, border-box',
    };

    return (
        <Container style={styles}>
            <div className='pt-5'>
                <Image src="/images/wubba2.png" width="400px">

                </Image>
            </div>
            <Image src="/images/rick2.png" width="200px" style={{ marginLeft: '100px' }}
            />
        </Container>
    );
};

export default MenuCarousel;
