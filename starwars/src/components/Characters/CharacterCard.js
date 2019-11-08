import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardHeader,
  CardTitle,
  Col
} from "reactstrap";

function CharacterCard(props) {
  return (
    <Col xs="6">
      <Card body>
        <CardBody>
          <CardHeader tag="h4">{props.name}</CardHeader>
          <CardTitle>{props.gender}</CardTitle>
          <CardText>Birth Year: {props.birth_year}</CardText>
          <CardText>Height: {props.height}cm</CardText>
          <CardText>Weight: {props.mass}kg</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

export default CharacterCard;
