import React from 'react'

const LessonTabComponent = ({lessons, selectLesson}) =>
    <ul className="nav nav-tabs">
        {
            lessons.map(lesson =>
                <li onClick={() => selectLesson (lesson)}
                    key={lesson.id}
                    className="nav-item">
                    <a className="nav-link active" href="#">
                        {lesson.title}
                    </a>
                </li>
            )
        }
    </ul>

export default LessonTabComponent;