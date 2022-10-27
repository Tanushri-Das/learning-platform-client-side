import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummaryCard from "../Shared/CourseSummaryCard/CourseSummaryCard";
import '../Home/Home.css';
const Home = () => {
  const allCourses = useLoaderData();
  return <div>
    <div className="col">
    {
        allCourses.map(course =><CourseSummaryCard key={course._id} course={course}></CourseSummaryCard>)
    }
    </div>
    
  </div>;
};

export default Home;
