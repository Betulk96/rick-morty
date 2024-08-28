"use client";
import React from 'react';
import { Col, Container, Image, Nav, NavbarBrand, Row } from 'react-bootstrap';
import "./header.scss";
import Link from "next/link";

const Header = () => {
    return (
        <Container fluid className="header-container">
            <Row className="justify-content-between align-items-center">
                <Col xs="auto">
                    <NavbarBrand href="/"  >
                        <Image
                            src="/images/rmgreen.png"
                            alt="logo"
                            width={220}
                            height={130}
                        />
                    </NavbarBrand>
                </Col>
                <Col xs="auto">
                    <Nav className="d-flex">
                        <Nav.Item>
                            <Nav.Link href="/about">
                                <div className="d-flex align-items-center">
                                    About
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/doc">
                                <div className="d-flex align-items-center">
                                    DOC
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/support">
                                <div className="d-flex align-items-center">
                                    Support
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;
