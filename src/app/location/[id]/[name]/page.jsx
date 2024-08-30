"use client"
import Loading from '@/app/loading';
import LocationDetails from '@/components/location/LocationDetails';
import Spacer from '@/components/Spacer';
import { getLocationById, getMultipleLocationsByIds } from '@/services/location-service';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const LocationPage = () => {
    const { id, name } = useParams();
    console.log("Id:", id, name);

    const [location, setLocation] = useState(null);
    useEffect(() => {
        if (!id) {
            return;
        }
        fetchLocation(id);
    }, [id]);

    const fetchLocation = async (id) => {
        console.log("fetchLocation", id);

        try {
            const res = await getLocationById(id);
            console.log("Location:", res);
            if (res) {
                setLocation(res);
            } else {
                console.error("Location not found");
            }
        } catch (err) {
            console.error("Server error", err);
        }
    };


    return (
        <>
           
            <Spacer height={30} />
            {location ? (
                <LocationDetails property={location} />
            ) : (
                <Loading />
            )}
        </>
    )
}

export default LocationPage
