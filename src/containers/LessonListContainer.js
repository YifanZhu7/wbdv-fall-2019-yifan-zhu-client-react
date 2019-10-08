import React from 'react'
import LessonTabComponent from "../components/LessonTabComponent";
import TopicListContainer from "./TopicListContainer";

export default class LessonListContainer
    extends React.Component {
    constructor(props) {
        super(props)
        // this.titleChanged = this.titleChanged.bind(this)
        // this.createModule = this.createModule.bind(this)
        const lesson = this.props.lessons[0]
        this.state = {
            newLesson: {
                title: '',
            },
            lesson: lesson,
            lessons: this.props.lessons
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            lessons: nextProps.lessons
        })
    }

    selectLesson = lesson => {
        this.setState(
            {
                lesson: lesson
            }
        )
    }

    newLessonChanged = (event) =>
        this.setState({
            newLesson: {
                title: event.currentTarget.value,
                id:(new Date()).getTime()
            }
        })

    createLesson = () => {
        this.setState(prevState => ({
            newLesson: {
                title: ''
            },
            lessons: [
                ... prevState.lessons,
                prevState.newLesson
            ]
        }))
    }

    deleteLesson = lesson => {
    }

    editLesson = lesson => {
    }

    render() {
        return (
            <div>
                <input onChange={this.newLessonChanged}
                       value={this.state.newLesson.title}/>
                <button onClick={this.createLesson}>
                    Create Lesson
                </button>
                <button onClick={this.updateLesson}>
                    Update Lesson
                </button>
                <div className="row">
                    <div className="col-3">
                        <LessonTabComponent
                            updateLesson={this.editLesson}
                            deleteLesson={this.deleteLesson}
                            selectLesson={this.selectLesson}
                            lessons={this.state.lessons}/>
                    </div>
                    <div className="col-9">
                    <TopicListContainer
                        topics={this.state.lesson.topics}/>
                    </div>
                </div>
            </div>
        );
    }
}

