import * as React from "react";
import { educationType } from "../../data/types";

const Education = (props:{education: educationType}) => {
    return (
      <div className="item">
        <h3 className="title"><i className="fa svg-inline--fa fa-graduation-cap"></i>{props.education.degree}</h3>
        <h4 className="university">{props.education.school}<span className="year">({props.education.graduation})</span></h4>
      </div>
    );
  }

  export default Education;