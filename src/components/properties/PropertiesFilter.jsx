"use client";
import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { filterData } from './filter/filterData';
import "./properties-filter.scss"

const PropertiesFilter = ({ onSearch }) => {
    const [filters, setFilters] = useState({
        status: [],
        species: [],
        type: [],
        gender: [],
        
    });
    const [formData, setFormData] = useState({});

    useEffect(() => {        
        setFilters(filterData);
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));

        onSearch({ ...formData, [name]: value });
    };

    return (
        <Form className="properties-filter">
            <Row >
                <Col  md={3} >
                    <Form.Group controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select" name="status" onChange={handleChange}>
                            <option value="">All</option>
                            {filters.status.map((status) => (
                                <option key={status} value={status.charAt(0).toLowerCase() + status.slice(1)}>
                                    {status.charAt(0).toUpperCase() + status.slice(1)}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>

                <Col  md={3}>
                    <Form.Group controlId="species">
                        <Form.Label>Species</Form.Label>
                        <Form.Control as="select" name="species" onChange={handleChange}>
                            <option value="">All</option>
                            {filters.species.map((species) => (
                                <option key={species} value={species.charAt(0).toLowerCase() + species.slice(1)}>
                                    {species.charAt(0).toUpperCase() + species.slice(1)}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
           
                <Col  md={3}>
                    <Form.Group controlId="type">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" name="type" onChange={handleChange}>
                            <option value="">All</option>
                            {filters.type.map((type) => (
                                <option key={type} value={type.charAt(0).toLowerCase() + type.slice(1)}>
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>

                <Col  md={3}>
                    <Form.Group controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select" name="gender" onChange={handleChange}>
                            <option value="">All</option>
                            {filters.gender.map((gender) => (
                                <option key={gender} value={gender.charAt(0).toLowerCase() + gender.slice(1)}>
                                    {gender.charAt(0).toUpperCase() + gender.slice(1)}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
            
               

               
            </Row>
        </Form>
    );
};

export default PropertiesFilter;
