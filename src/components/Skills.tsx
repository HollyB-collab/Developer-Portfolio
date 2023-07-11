import * as React from "react";
import { skillsType } from "../../data/types";


const Skills = (props: {skill: skillsType}) => {
    return (
            <div className="item">
                <h3 className="level-title">{props.skill.name}<span aria-describedby="tooltip22724" className="level-label" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="You can use the tooltip to explain more about your skill level..."><i className="fa svg-inline--fa fa-info-circle"></i>{props.skill.level}</span></h3>

                <div className="level-bar progress">
					<div className="progress-bar level-bar-inner" role="progressbar" style={{'width': `${props.skill.progressbar}%`}}></div>
				</div>
            </div>
    );
  }

  export default Skills;