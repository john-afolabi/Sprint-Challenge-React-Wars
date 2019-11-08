import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardHeader,
  CardTitle,
} from "reactstrap";

function CharacterCard(props) {
  return (
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardBody>
          <CardHeader tag="h4">{props.name}</CardHeader>
          <CardTitle style={{ textTransform: 'uppercase' }}>{props.gender}</CardTitle>
          <CardText>Birth Year: {props.birth_year}</CardText>
          <CardText>Height: {props.height}cm</CardText>
          <CardText>Weight: {props.mass}kg</CardText>
        </CardBody>
      </Card>
  );
}

export default CharacterCard;
