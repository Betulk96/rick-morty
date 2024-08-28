import React from 'react';
import { Container, Image } from 'react-bootstrap';

const MenuCarousel = () => {

    const styles = {
        backgroundColor: 'black',
        height: '40vh', 
        display: 'flex',
        justifyContent: 'space-evenly', // Yazıyı sola, resmi sağa hizalar
        alignItems: 'end',            // İçeriği dikeyde ortalar
        color: 'white',             
        padding: '0 20px',               // Hem sağdan hem soldan boşluk bırakabiliriz
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)' 
    };

    return (
        <Container style={styles}>
            <div className='pt-5'>
                <Image src="/images/wubba2.png" width="400px">
                    
               </Image>
            </div>
            <Image src="/images/rick2.png" width="200px"
                />
        </Container>
    );
};

export default MenuCarousel;
