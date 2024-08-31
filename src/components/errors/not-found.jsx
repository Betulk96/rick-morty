"use client"
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./not-found.scss";

const NotFound = () => {

	return (

		<Image
			src="/images/errors-image/2.jpeg"
			layout="responsive"
			width={0}
			height={0}
			className="not-found-image"
			alt="not found"
			
		/>

	);
};

export default NotFound;
