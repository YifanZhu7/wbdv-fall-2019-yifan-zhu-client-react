import React from 'react'
import CourseList from "./components/CourseList";
import CourseEditor from "./containers/CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class WhiteBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <h1>Whiteboard</h1>
                    <Link to="/grid">Grid</Link>
                    |
                    <Link to="/list">List</Link>
                    <CourseList/>
                    <Route path = "/edit/:courseId"
                           render={(props) => <CourseEditor {... props}/>}>
                    </Route>

                </div>
            </Router>
        )
    }

}