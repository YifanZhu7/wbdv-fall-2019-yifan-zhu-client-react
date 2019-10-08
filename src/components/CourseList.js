import React from 'react'
import CourseService from "../services/CourseService";
import CourseListComponent from "./CourseListComponent";
import CourseGridComponent from "./CourseGridComponent";
import {Route} from 'react-router-dom'

export default class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.service = CourseService.getInstance()
        this.state = {
            course: {
                title: 'New Course'
            },
            courses: this.service.findAllCourses()
        }
    }

    newCourseChanged = (event) =>
        this.setState({
            course: {
                title: event.target.value
            }
        })

    createCourse = () => {
        this.setState(prevState => {
            const course = {
                title: prevState.course.title,
                id: (new Date()).getTime()
            };
            this.service.createCourses(course);

            return {
                courses: this.service.findAllCourses()
            }
        })

    }

    deleteCourse = courseId => {
        console.log(courseId)
        this.setState(prevState => (
             {
                courses: this.service.deleteCourse(courseId)
            }

        ))

    }

    render() {
        return (
            <div>
                <input onChange={this.newCourseChanged}
                       value={this.state.course.title}/>
                <button onClick={this.createCourse}>
                    Create Course
                </button>
                <Route path="/list"
                       render={() => <CourseListComponent
                           deleteCourse = {this.deleteCourse}
                           courses={this.state.courses}/>}
                />
                <Route path="/grid"
                       render={() => <CourseGridComponent
                           deleteCourse = {this.deleteCourse}
                           courses={this.state.courses}/>}
                />
            </div>
        )
    }
}