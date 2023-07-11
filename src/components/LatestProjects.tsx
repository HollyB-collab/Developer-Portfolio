import * as React from "react";
import { portfolioType, projectsType} from "../../data/types";

const LatestProjects = (props: {portfolioData: portfolioType}) => {

  const project = props.portfolioData.projects;
    return (
      <section className="latest section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Latest Projects</h2>
          <div className="content">
            {project[0].primary &&
            <div>
            <div className="item featured text-center">
              {project[0].imageUrl &&
              <>
              <div className="featured-image has-ribbon">
                <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-4-template-for-saas-businesses/" target="_blank">
                  <img className="img-fluid project-image rounded shadow-sm" src="assets/images/projects/project-featured.jpg" alt="project name" />
                </a>
                <div className="ribbon">
                  <div className="text">New</div>
                </div>
              </div>
              </>}

            <h3 className="title mb-3"><a href={project[0].githubLink} target="_blank">{project[0].title}</a></h3>

              <div className="desc text-start">
                <p>{project[0].description}</p>
              </div>
              <a className="btn btn-cta-secondary" href={project[0].githubLink} target="_blank"><i className="fa fa-thumbs-up"></i> Back my project</a>
            </div>
            </div>
            }
            {props.portfolioData.projects.map((project) => {
              return (
                <>
                {!project.primary &&
                <>
                  <hr className="divider" />
                  <div className="item row">
                    {project.imageUrl && <>
                      <a className="col-md-4 col-12" href={project.githubLink} target="_blank">
                        <img className="img-fluid project-image rounded shadow-sm" src={project.imageUrl} alt={project.title} />
                      </a>
                    </>}
                      <div className="desc col-md-8 col-12">
                        <h3 className="title"><a href={project.githubLink} target="_blank">{project.title}</a></h3>
                        <p className="mb-2">{project.description}</p>
                        <p><a className="more-link" href={project.githubLink} target="_blank"><i className="fas fa-external-link-alt"></i>Find out more</a></p>
                      </div>
                  </div>
                </>
                 }
                 </>
                );
              }
              )}


          </div>
        </div>
      </section>
    );
  }

export default LatestProjects;