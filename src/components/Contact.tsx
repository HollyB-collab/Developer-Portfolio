import * as React from "react";
import { portfolioType } from "../../data/types";

const Contact = (props: {portfolioData: portfolioType}) => {

  const contact = props.portfolioData.contact;
    return (
      <aside className="info aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading sr-only">Basic Information</h2>
          <div className="content">
            <ul className="list-unstyled">
              {contact.location && <li><i className="fa svg-inline--fa fa-map-pin"></i><span className="sr-only"> Location:</span>{contact.location}</li>}
              {contact.email && <li><i className="fa svg-inline--fa fa-envelope"></i><span className="sr-only"> Email:</span><a href={contact.email}>{contact.email}</a></li>}
              {contact.website && <li><i className="fa svg-inline--fa fa-link"></i><span className="sr-only"> Website:</span><a href={contact.website}>website</a></li>}
            </ul>
          </div>
        </div>
      </aside>
    );
  }
export default Contact;