import React from 'react'
import ModuleListComponent from "../components/ModuleListComponent";
import LessonListContainer from "./LessonListContainer";
import courses from "../courses";

export default class ModuleListContainer
    extends React.Component {
    constructor(props) {
        super(props)
        // this.titleChanged = this.titleChanged.bind(this)
        // this.createModule = this.createModule.bind(this)
        const module = this.props.modules[0]

        this.state = {
            newModule: {
                title: '',

            },
            module: module,
            modules: this.props.modules
        }
    }


    selectModule = module => {
        this.setState(
            {
                module: module
            }
        )
    }

    newModuleChanged = (event) =>
        this.setState({
            newModule: {
                title: event.currentTarget.value,
                id: (new Date()).getTime()
            }
        })

    createModule = () => {
        this.setState(prevState => ({
            newModule: {
                title: '',
            },
            modules: [
                ...prevState.modules,
                prevState.newModule
            ]
        }))
    }

    deleteModule = moduleId =>
            this.courses = courses.filter(
                course => course.id !== moduleId
            )

    editModule = module => {
    }


    render(){
        return (
            <div>
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
                            updateModule={this.editModule}
                            deleteModule={this.deleteModule}
                            selectModule={this.selectModule}
                            modules={this.props.modules}/>
                    </div>
                    <div className="col-9">
                    <LessonListContainer
                        lessons={this.state.module.lessons}/>
                    </div>
                </div>
            </div>
        );
    }
}

