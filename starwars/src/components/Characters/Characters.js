import React, { useState, useEffect } from "react";
import axios from "axios"
import { Container } from 'reactstrap';

function Characters() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/?format=json")
        .then(response => {
            setPeople(response.data.results)
        })
        .catch(error => {

        })
    }, [])

    return (
        <Container>
            {
                people.map((person) => {
                    return (
                        <CharacterCard
                        
                        
                        
                        />
                    )
                })
            }
        </Container>
    )
}

export default Characters;