import React, { useState, useEffect } from "react";
import axios from "axios"
import { Container } from "reactstrap";
import CharacterCard from "./CharacterCard"

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
                            key={person.name}
                            name={person.name}
                            gender={person.gender}
                            birth_year={person.birth_year}
                            height={person.height}
                            mass={person.mass}
                        />
                    )
                })
            }
        </Container>
    )
}

export default Characters;