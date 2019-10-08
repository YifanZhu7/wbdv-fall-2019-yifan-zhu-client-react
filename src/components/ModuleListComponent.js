import React from 'react'


const ModuleListComponent = ({modules, selectModule, deleteModule}) =>
    <ul className="list-group">{
        modules.map(module =>
            <li
                onClick={() => selectModule (module)}
                key={module.id}
                className="list-group-item">
                {module.title}

                <button
                    onClick={() => deleteModule(module.id)}
                    type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </li>
        )
    }</ul>

export default ModuleListComponent;