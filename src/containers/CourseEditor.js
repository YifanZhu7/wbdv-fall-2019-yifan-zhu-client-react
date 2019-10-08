import React from 'react'
import CourseService from "../services/CourseService";
import ModuleListContainer from "./ModuleListContainer";
import courses from "../courses";

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.match.params.courseId)
        const service = CourseService.getInstance()
        const course = service.findCourseById(props.match.params.courseId)
        const module = course.modules[0]
        const lesson = module.lessons[0]
        this.state = {
            newModule: {
                title: ''
            },
            lesson: lesson,
            module: module,
            course: course
        }
    }


    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.history.goBack()
                }}>
                    Back
                </button>
                <h2>CourseEditor:
                    {this.state.course.title}
                </h2>
                <ModuleListContainer
                    modules={this.state.course.modules}/>
            </div>
        )
    }
}