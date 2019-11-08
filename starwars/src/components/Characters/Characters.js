import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button } from "reactstrap";
import CharacterCard from "./CharacterCard";

function Characters() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?format=json&page=${page}`)
      .then(response => {
        setPeople(response.data.results);
        console.log(page);
        
      })
      .catch(error => {});
  }, [page]);

  return (
    <Container>
        <div className="characterslist">
      {people.map(person => {
        return (
          <CharacterCard
            key={person.name}
            name={person.name}
            gender={person.gender}
            birth_year={person.birth_year}
            height={person.height}
            mass={person.mass}
          />
        );
      })}
      </div>
      <Button color="primary" onClick={() => setPage(page - 1)}>Previous Page</Button>
      <Button color="primary" onClick={() => setPage(page + 1)}>Next Page</Button>
    </Container>
  );
}

export default Characters;
