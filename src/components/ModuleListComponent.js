import React from 'react'

const ModuleListComponent = ({modules, selectModule}) =>
    <ul className="list-group">{
        modules.map(module =>
            <li
                onClick={() => selectModule (module)}
                key={module.id}
                className="list-group-item">
                {module.title}
            </li>
        )
    }</ul>

export default ModuleListComponent;