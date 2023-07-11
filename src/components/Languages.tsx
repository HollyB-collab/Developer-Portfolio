import * as React from "react";
import { languagesType } from "../../data/types";

const Languages = (props: {language: languagesType}) => {

  const star = props.language.stars;
  return (

    <li className="item">
    <span className="title"><strong> {props.language.name}:</strong></span>
    <span className="level"> {props.language.level} Speaker <br className="visible-xs"/>
    {Array.apply(null, { length: star }).map(() => (
  <i className="fa fa-star"></i>
))
    }
    </span>
    </li>

  );
}

export default Languages;