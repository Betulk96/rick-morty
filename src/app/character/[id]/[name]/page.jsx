"use client"
import Loading from '@/app/loading';
import PropertyDetails from '@/components/properties/PropertyDetails';
import Spacer from '@/components/Spacer';
import { getCharacterById } from '@/services/characters-service';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const CharacterDetail = () => {
    const { id, name } = useParams();
    /* console.log("Id:", id, name); */

    const [character, setCharacter] = useState(null);
    useEffect(() => {
        if (!id) {
            console.error("Id is missing");
            return;
        }

        fetchCharacter(id);

    }, [id]);

    const fetchCharacter = async (id) => {

        try {
            const res = await getCharacterById(id);
            console.log("Character:", res);
            if (res) {
                setCharacter(res);
            } else {
                console.error("Character not found");
            }
        } catch (err) {
            console.error("Server error", err);
        }
    };

    return (
        <>
            <Spacer height={30} />
            {character ? (
                <PropertyDetails property={character} />
            ) : (
                <Loading />
            )}
        </>
    )
}

export default CharacterDetail
