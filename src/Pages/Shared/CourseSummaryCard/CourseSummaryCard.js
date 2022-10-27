import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CardGroup from "react-bootstrap/CardGroup";
import '../CourseSummaryCard/CourseSummaryCard';

const CourseSummaryCard = ({ course }) => {
  const { title, details, image_url, _id } = course;
  console.log(course);
  return (

        <Card className="card w-75 h-100">
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title className="title">{title}</Card.Title>
            <Card.Text>{details.slice(0, 300) + "..."}</Card.Text>
            
          </Card.Body>
        </Card>
     

    
  );
};

export default CourseSummaryCard;
