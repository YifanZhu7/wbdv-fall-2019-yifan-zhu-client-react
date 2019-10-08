import React from 'react'
import {Link} from "react-router-dom";

const CourseGridComponent = ({courses, deleteCourse}) =>
    <div>
        <h2>Course Grid</h2>
        <div className="card-deck">
            {
                courses.map(course =>
                    <div key={course.id} className="card">
                        <img src="" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to={`/edit/${course.id}`}>
                                    {course.title}
                                </Link>
                                <button
                                    onClick={() =>deleteCourse(course.id)}>
                                    Delete
                                </button>
                            </h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
export default CourseGridComponent;