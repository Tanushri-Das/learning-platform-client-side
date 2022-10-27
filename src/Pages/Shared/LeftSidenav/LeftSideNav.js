import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../LeftSidenav/LeftSideNav.css';

const LeftSideNav = () => {

    const [courses,setCourses] = useState([]);

    useEffect(()=>{
        fetch('https://learning-platform-server-side-six.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

  return (
    <div>
        {
            courses.map(course =><p key={course.id}>
              <Link style={{textDecoration:'none',fontSize:'18px'}} to={`/courses/${course.id}`}>{course.name}</Link>
            </p>)
        }
    </div>
  )
}

export default LeftSideNav