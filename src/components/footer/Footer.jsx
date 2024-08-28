"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { FaImdb, FaWikipediaW, FaGlobe, FaRegCopyright } from "react-icons/fa";
import { TbBrandNetflix } from "react-icons/tb";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs={12} md={5} xl={4} className="footer-contact">
            <ul>
              <li>
                Creator:
                <Link href="https://www.google.com/search?q=Justin+Roiland" target="_blank" rel="noopener noreferrer">
                  Justin Roiland
                </Link>,
                <Link href="https://www.google.com/search?q=Dan+Harmon" target="_blank" rel="noopener noreferrer">
                  Dan Harmon
                </Link>
              </li>
              <li>
                Stars:
                <Link href="https://www.google.com/search?q=Justin+Roiland" target="_blank" rel="noopener noreferrer">
                  Justin Roiland
                </Link>,
                <Link href="https://www.google.com/search?q=Chris+Parnell" target="_blank" rel="noopener noreferrer">
                  Chris Parnell
                </Link>,
                <Link href="https://www.google.com/search?q=Spencer+Grammer" target="_blank" rel="noopener noreferrer">
                  Spencer Grammer
                </Link>,
                <Link href="https://www.google.com/search?q=Sarah+Chalke" target="_blank" rel="noopener noreferrer">
                  Sarah Chalke
                </Link>
              </li>
            </ul>
            <div className="d-flex justify-content-around footer-icons">
              <Link href="https://www.adultswim.com/videos/rick-and-morty" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={24} />
              </Link>
              <Link href="https://www.imdb.com/title/tt2861424/" target="_blank" rel="noopener noreferrer">
                <FaImdb size={24} />
              </Link>
              <Link href="https://en.wikipedia.org/wiki/Rick_and_Morty" target="_blank" rel="noopener noreferrer">
                <FaWikipediaW size={24} />
              </Link>
              <Link href="https://www.netflix.com/title/80014749" target="_blank" rel="noopener noreferrer">
                <TbBrandNetflix size={24} />
              </Link>
            </div>
          </Col>
          <Col xs={12} md={12} xl={4} className="footer-logo">
            <Link href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">
              <img src="/images/api2.png" alt="Rick&Morty Logo" width={20} height={20} />
              &nbsp;Rick&Morty API
            </Link>
            <p> <FaRegCopyright /> 2024&nbsp;
              <Link href="https://www.linkedin.com/in/betül-kuyucu/" target="_blank" rel="noopener noreferrer">
                Betül Kuyucu
              </Link>. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
