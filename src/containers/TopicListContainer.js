import React from 'react'
import TopicListComponent from "../components/TopicListComponent";

export default class TopicListContainer
    extends React.Component {
    constructor(props) {
        super(props)
        // this.titleChanged = this.titleChanged.bind(this)
        // this.createModule = this.createModule.bind(this)
        this.state = {
            newTopic: {
                title: '',
            },
            topics: this.props.topics
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            topics: nextProps.topics
        })
    }

    newTopicChanged = (event) =>
        this.setState({
            newTopic: {
                title: event.currentTarget.value,
                id:(new Date()).getTime()
            }
        })

    createTopic = () => {
        this.setState(prevState => ({
            newTopic: {
                title: ''
            },
            topics: [
                ... prevState.topics,
                prevState.newTopic
            ]
        }))
    }

    deleteTopic = topic => {

    }

    editTopic = topic => {

    }

    render() {
        return (
            <div>
                <input onChange={this.newTopicChanged}
                       value={this.state.newTopic.title}/>
                <button onClick={this.createTopic}>
                    Create Topic
                </button>
                <button onClick={this.updateTopic}>
                    Update Topic
                </button>
                <div className="row">
                    <div className="col-3">
                        <TopicListComponent
                            editTopic={this.editTopic}
                            deleteModule={this.deleteTopic}
                            selectModule={this.selectTopic}
                            topics={this.state.topics}/>
                    </div>
                </div>
            </div>
        );
    }
}

