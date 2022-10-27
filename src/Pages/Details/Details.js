import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";
import DawnloadPage from "../DawnloadPage/DawnloadPage";
import '../Details/Details.css';

const Details = () => {
  const course = useLoaderData();
  console.log(course.video);
  return (
    <div>
      <div>
        <DawnloadPage rootElementId="detailsToPDf" downloadFileName="checkPage"></DawnloadPage>
      </div>
      <div id="detailsToPDf">
        <Card className="card mt-4">
          <Card.Img variant="top" src={course.image_url} className="card-img"/>
          <Card.Body>
            <Card.Title className="title">{course.title}</Card.Title>
            <Card.Text>
              <p>{course.details}</p>
            </Card.Text>
           
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Details;
