import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Col, Row } from "reactstrap";
import CharacterCard from "./CharacterCard";

function Characters() {
  const [people, setPeople] = useState([]);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [currURL, setCurrURL] = useState("https://swapi.co/api/people/?format=json")

  useEffect(() => {
    axios
      .get(currURL)
      .then(response => {
        setNext(response.data.next)
        setPrev(response.data.previous)
        setPeople(response.data.results);
        console.log(response.data.next);
        
      })
      .catch(error => {});
  }, [currURL]);

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
          <Button color="primary" onClick={() => setCurrURL(prev)}>
            Previous Page
          </Button>
        </Col>
        <Col xs="6">
          <Button color="primary" onClick={() => setCurrURL(next)}>
            Next Page
          </Button>
          </Col>
      </Row>
    </Container>
  );
}

export default Characters;
