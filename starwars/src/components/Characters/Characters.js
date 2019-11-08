import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Col, Row } from "reactstrap";
import CharacterCard from "./CharacterCard";

function Characters() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?format=json&page=${page}`)
      .then(response => {
        setPeople(response.data.results);
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
      <Row>
        <Col xs="6">
          <Button color="primary" onClick={() => setPage(page - 1)}>
            Previous Page
          </Button>
        </Col>
        <Col xs="6">
          <Button color="primary" onClick={() => setPage(page + 1)}>
            Next Page
          </Button>
          </Col>
      </Row>
    </Container>
  );
}

export default Characters;
