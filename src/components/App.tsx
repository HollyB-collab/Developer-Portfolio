import * as React from "react";
import { useState } from "react";
import Header from './Header';
import Experience from './Experience';
import LatestProjects from './LatestProjects';
import Github from './Github';
import Contact from './Contact';
import Skills from './Skills';
import Education from './Education';
import Footer from './Footer';
import Languages from './Languages';
import { portfolioData } from "../../data/data";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
<Header setDarkmode={setDarkMode} darkmode={darkMode} contact={portfolioData.contact}/>
  <div className="container sections-wrapper py-5">
    <div className="row">
      <div className="primary col-lg-8 col-12">
        <Experience portfolioData = {portfolioData} />

        <LatestProjects portfolioData = {portfolioData}/>

        <Github />
      </div>

      <div className="secondary col-lg-4 col-12">
        <Contact portfolioData={portfolioData}/>
        <aside className="skills aside section">
          <div className="section-inner shadow-sm rounded">
            <h2 className="heading">Skills</h2>
            <div className="content">
              <p className="intro">
              Intro about your skills goes here.</p>
              <div className="skillset">
              {portfolioData.skills.map((skill) => {
                return (
                  <Skills skill={skill}/>
                )
              })}
              <p><a className="more-link" href={portfolioData.contact.githublink}><i className="fa svg-inline--fa fa-link"></i>More on GitHub</a></p>
              </div>
            </div>
          </div>
        </aside>
        <aside className="education aside section">
          <div className="section-inner shadow-sm rounded">
            <h2 className="heading">Education</h2>
            <div className="content">
              {portfolioData.education.map((education) => {
                return (
                  <Education education={education}/>
                )
              })}
            </div>
          </div>
        </aside>

        <aside className="languages aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Languages</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                              {portfolioData.languages.map((language) => {
                                return (
                                  <Languages language={language}/>
                                )
                              })}
                            </ul>
                        </div>
                    </div>
                </aside>
      </div>

    </div>
  </div>
  <Footer />
</div>
  )
}

export default App;