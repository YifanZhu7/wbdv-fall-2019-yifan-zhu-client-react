import React from 'react'
import CourseService from "../services/CourseService";
import ModuleListComponent from "../components/ModuleListComponent";
import LessonTabComponent from "../components/LessonTabComponent";
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

    newModuleChanged = (event) =>
        this.setState({
            newModule: {
                title: event.target.value
            }
        })

    createModule = () => {
        this.setState(prevState => {
            const module = {
                title: prevState.newModule.title,
                id: (new Date()).getTime()
            };
            module: this.modules.push(module);
            return{
                modules: this.modules
            }
    })}

    // deleteModule = moduleId => {
    //     console.log(moduleId)
    //     this.setState(prevState => ({
    //         newModule: {
    //             title: ''
    //         },
    //         modules: [
    //             ... prevState.modules,
    //             prevState.newModule
    //         ]
    //     }))
    // }


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
                <input onChange={this.newModuleChanged}
                       value={this.state.newModule.title}/>
                <button onClick={this.createModule}>
                    Create Module
                </button>
                <button onClick={this.updateModule}>
                    Update Module
                </button>
                <div className="row">
                    <div className="col-3">
                        <ModuleListComponent
                            deleteModule={this.deleteModule}
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