import * as React from "react";
import { portfolioType, experienceType } from "../../data/types";

const Experience = (props:{portfolioData:portfolioType}) => {


  return (
    <section className="experience section">
          <div className="section-inner shadow-sm rounded">
            <h2 className="heading">Work Experience</h2>
              <div className="content">

                {props.portfolioData.workExperience.map((experience: experienceType) => {
                  return(
                    <div className="item">
                      <h3 className="title">{experience.title} - <span className="place">{experience.location} <a href={experience.websiteLink}>{experience.company}</a></span> </h3> <p className="year">{experience.dates}</p>
                        <ul>

                          {experience.responsibilities.map((responsibility: string) => {
                            return (
                              <li>{responsibility}</li>
                            );
                          })
                          }

                        </ul>
                    </div>
                  );
                })
                }

              </div>
            </div>
        </section>
  );
}

export default Experience;