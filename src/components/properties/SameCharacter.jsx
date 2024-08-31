"use client"
import { swAlert } from '@/helpers/swal';
import { filterCharacters } from '@/services/characters-service';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "./same-advert.scss";
import { Card } from 'react-bootstrap';

const SameCharacter = ({ property }) => {
  const [similarProperties, setSimilarProperties] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchSimilarProperties = async () => {
      try {
        const res = await filterCharacters({
          status: property.status,
          species: property.species,
          type: property.type,
          gender: property.gender,
        });

        console.log("res", res);

        if (!res || !res.results) {
          swAlert(
            "Error",
            "Failed to fetch similar properties. Please try again later.",
            "error"
          );
          return;
        }

        // Filter out the current property from the results
        const filteredProperties = res.results.filter(
          (item) => item.id !== property.id
        );

        setSimilarProperties(filteredProperties);
      } catch (err) {
        console.error("Error fetching similar properties:", err);
      }
    };

    fetchSimilarProperties();
  }, [property]);

  const handleClick = (id, name) => {
    router.push(`/character/${id}/${name}`);
  };

  if (similarProperties.length === 0) {
    return null;
  }

  return (
    <div className="similar-properties">
      <h4 className="similar-properties-title">Similar Characters</h4>
      <Swiper
       /*  pagination={{ clickable: true }} */
        spaceBetween={30}
        slidesPerView={4}
        className="mySwiper"
        modules={[Autoplay, Pagination]}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {similarProperties.map((similarProperty) => (
          <SwiperSlide key={similarProperty.id}>
            <Card
              className="swiper-card"
              onClick={() => handleClick(similarProperty.id, similarProperty.name)}
            >
              <div className="card-img-wrapper">
                <Card.Img
                  variant="top"
                  src={similarProperty.image || "/placeholder-image.jpg"}
                  className="swiper-image"
                />
                <div className="img-title">
                  <Card.Title className="swiper-title">
                    {similarProperty.name}
                  </Card.Title>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SameCharacter;
