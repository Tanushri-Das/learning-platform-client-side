
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import '../RightSideNav/RightSideNav.css';

const RightSideNav = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://learning-platform-server-side-six.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <div className="column">
      {courses.map((course) => (
        <p key={course.id}>
        
            <Card className="w-100 p-2" style={{height:'680px'}}>
            <Card.Img style={{height:'200px'}} variant="top" src={course.image_url} />
            <Card.Body>
              <Card.Title className="title">{course.title}</Card.Title>
              <Card.Text>{course.details.slice(0, 300) + "..."}</Card.Text>
              <Link to={`/courses/${course.id}`}>
                <Button className="name-btn" variant="primary">{course.name}</Button>
              </Link>
            </Card.Body>
          </Card>
          
          
        </p>
      ))}
      </div>
      
    </div>
    

  );
 
};

export default RightSideNav;
