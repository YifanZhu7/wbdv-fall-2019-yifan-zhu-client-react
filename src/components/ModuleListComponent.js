import React from 'react'


const ModuleListComponent = ({modules, selectModule, deleteModule, editModule}) =>
    <div className="nav flex-column nav-pills"
         role="tablist"
         aria-orientation="vertical">{
        modules.map(module =>
            <div>
            <a className="nav-link"
               onClick={() => selectModule(module)}
               key={module.id}
               data-toggle="pill"
               href="#v-pills-home"
               role="tab"
               aria-controls="v-pills-home"
               aria-selected="true">
                {module.title}
            </a>
                <button
                    onClick={() => editModule(module.id)}
                    type="button" className="close float-left">
                    Edit
                </button>
                <button
                    onClick={() => deleteModule(module.id)}
                    type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
    </div>


export default ModuleListComponent;
