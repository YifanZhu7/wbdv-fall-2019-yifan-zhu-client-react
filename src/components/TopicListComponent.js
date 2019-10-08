import React from 'react'

const TopicListComponent = ({topics, deleteTopic, editTopic}) =>
    <div className="nav flex-column nav-pills"
         role="tablist"
         aria-orientation="vertical">{
        topics.map(topic =>
            <div>
            <a className="nav-link"
               key={topic.id}
               data-toggle="pill"
               href="#v-pills-home"
               role="tab"
               aria-controls="v-pills-home"
               aria-selected="true">
                {topic.title}
            </a>
                <button
                    onClick={() => editTopic(topic.id)}
                    type="button" className="close float-left">
                    Edit
                </button>
                <button
                    onClick={() => deleteTopic(topic.id)}
                    type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

        )
    }
    </div>

export default TopicListComponent;