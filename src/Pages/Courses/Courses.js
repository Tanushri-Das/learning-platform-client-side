import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet, useLoaderData } from "react-router-dom";
import AllCourses from "../AllCourses/AllCourses";
import CourseSummaryCard from "../Shared/CourseSummaryCard/CourseSummaryCard";
import LeftSideNav from "../Shared/LeftSidenav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Courses = () => {
//   const courses = useLoaderData();

  return (
    <Container className="mt-3">
      <Row>
        <Col lg="4" className="d-none d-lg-block">
          <LeftSideNav></LeftSideNav>
        </Col>
        <Col lg="8">
          <RightSideNav></RightSideNav>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
