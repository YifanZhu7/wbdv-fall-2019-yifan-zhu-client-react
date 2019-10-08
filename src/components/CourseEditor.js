import React from 'react'
import CourseService from "../services/CourseService";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabComponent from "./LessonTabComponent";

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.match.params.courseId)
        const service = CourseService.getInstance()
        const course = service.findCourseById(props.match.params.courseId)
        const module = course.modules[0]
        const lesson = module.lessons[0]
        this.state = {
            lesson: lesson,
            module: module,
            course: course
        }
    }

    selectModule = module => {
        this.setState(
            {
                module: module
            }
        )
    }

    selectLesson = lesson => {
        this.setState(
            {
                lesson: lesson
            }
        )
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
                <div className="row">
                    <div className="col-3">
                        <ModuleListComponent
                            selectModule={this.selectModule}
                            modules={this.state.course.modules}/>
                    </div>
                    <div className="col-9">
                        <LessonTabComponent
                            selectLesson={this.selectLesson}
                            lessons={this.state.module.lessons}/>

                        <div>
                            <ul className="list-group">{
                                this.state.lesson.topics.map(topic =>
                                    <li
                                        key={topic.id}
                                        className="list-group-item">
                                        {topic.title}
                                    </li>
                                )
                            }</ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}