import React from 'react'
import {Link} from "react-router-dom";

const CourseListComponent = ({courses, deleteCourse}) =>
    <div>
        <h2>CourseList</h2>
        <ul className="list-group">
            {
                courses.map(course =>
                    <li key={course.id} className='list-group-item'>
                        <Link to={`/edit/${course.id}`}>
                        {course.title}
                        </Link>
                        <button
                            onClick={() => deleteCourse(course.id)}
                            className="float-right">Delete</button>
                    </li>)
            }
        </ul>
    </div>

export default CourseListComponent;