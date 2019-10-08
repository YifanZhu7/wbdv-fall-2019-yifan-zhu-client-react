import React from 'react'

const LessonTabComponent = ({lessons, selectLesson, deleteLesson, editLesson}) =>
    <div className="nav flex-column nav-pills"
         role="tablist"
         aria-orientation="vertical">{
        lessons.map(lesson =>
            <div>
            <a className="nav-link"
               onClick={() => selectLesson(lesson)}
               key={lesson.id}
               data-toggle="pill"
               href="#v-pills-home"
               role="tab"
               aria-controls="v-pills-home"
               aria-selected="true">
                {lesson.title}
            </a>
                <button
                    onClick={() => editLesson(lesson.id)}
                    type="button" className="close float-left">
                    Edit
                </button>
                <button
                    onClick={() => deleteLesson(lesson.id)}
                    type="button" className="close float-right" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
    </div>

export default LessonTabComponent;