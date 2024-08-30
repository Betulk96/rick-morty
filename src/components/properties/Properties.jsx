"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PropertiesFilter from './PropertiesFilter';
import PropertiesCards from './PropertiesCards';
import { filterCharacters } from '@/services/characters-service';
import { useRouter, useSearchParams } from 'next/navigation';
import CustomPagination from '@/helpers/pagination';
import { swAlert, swError } from '@/helpers/swal';

const Properties = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [propertyList, setPropertyList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentFilters, setCurrentFilters] = useState({});

    const fetchProperties = useCallback(async (params) => {

        const status = params?.status || searchParams.get("status") || "";
        const species = params?.species || searchParams.get("species") || "";
        const type = params?.type || searchParams.get("type") || "";
        const gender = params?.gender || searchParams.get("gender") || "";
        const page = params?.page || searchParams.get("page") || 0;
        const paramsObj = {
            status,
            species,
            type,
            gender,

            page,
        };

        // console.log("paramsObj", paramsObj);
        setLoading(true);

        try {
            const response = await filterCharacters(paramsObj);
            // console.log("response", response);
            if (response.error) {
                swError("Not Found Characters", "error");
                setTimeout(() => {
                    window.location.href = "/";
                }, 3000); // 3 saniye gecikme
            } else {
                setPropertyList(response.results);
                setTotalPages(response.info.pages);
            }
        } catch (error) {
            console.error("An error occurred while fetching characters:", error);
            swError("Something went wrong. Please try again later.", "error");
            setTimeout(() => {
                window.location.href = "/";
            }, 2000);
        } finally {
            setLoading(false);
        }
    }, [searchParams]);

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        const filters = Object.fromEntries(params.entries());
        /*  console.log("filters", filters); */
        setCurrentPage(Number(params.get('page')) || 0);
        setCurrentFilters(filters);
        fetchProperties(filters);
    }, [searchParams, fetchProperties]);

    const handleSearch = (searchParams) => {
        /* console.log("searchParams", searchParams); */
        const updatedFilters = {
            ...Object.fromEntries(
                Object.entries(searchParams).filter(([_, value]) => value !== "")
            ),
            page: 1,
        };
        /*  console.log("Filters", updatedFilters); */

        setCurrentFilters(updatedFilters);
        const searchParamsString = new URLSearchParams(updatedFilters).toString();
        router.replace(`?${searchParamsString}`, { scroll: false });
        fetchProperties(updatedFilters);
    };

    const handlePageChange = (page) => {
        const updatedFilters = { ...currentFilters, page };  // 
        /*   console.log("updatedFilters", updatedFilters); */

        const searchParams = new URLSearchParams(updatedFilters).toString();
        /*  console.log("searchParams", searchParams); */
        router.push(`?${searchParams}`, { scroll: false });

        fetchProperties(updatedFilters);


        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Container>
            <Row>
                <Col lg={12} className="mt-3">
                    <PropertiesFilter onSearch={handleSearch} />
                </Col>
                <Col lg={12} className="mt-3">
                    <PropertiesCards properties={propertyList} loading={loading} />
                    <CustomPagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Properties;
