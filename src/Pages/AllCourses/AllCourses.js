
import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import '../AllCourses/AllCourses.css';

const AllCourses = () => {
  const courses = useLoaderData();
  console.log(courses)
  return (
    <Card className="mx-auto mt-4 card">
    <Card.Img variant="top" className="card-img" src={courses.image_url} />
    <Card.Body>
      <Card.Title className="title">{courses.title}</Card.Title>
      <Card.Text>
      <p>{courses.details}</p>
        {courses.details.length > 250 ? (
          <p>
            {courses.details.slice(0, 150) + "..."}
            <Link to={`/allCourses/${courses._id}`}>Read more</Link>
          </p>
        ) : (
          <p>{courses.details}</p>
        )}
      </Card.Text>
      <Link to={`/allCourses/${courses._id}`}>
        <Button variant="primary">Go premium</Button>
      </Link>
    </Card.Body>
  </Card>
      

  );
};

export default AllCourses;
