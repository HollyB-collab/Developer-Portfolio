import * as React from "react";
import { contactType } from "../../data/types";

const Header = (props: {contact: contactType}) => {
	const iconStyles = {
		"height": "100%",
		"width": "100%"
	};

    return (
      <div>
            <header className="header">
        <div className="container">
	        <div className="row align-items-center">
			    <div className="col">
		            <img className="profile-image img-fluid float-start rounded-circle" src="assets/images/profile.png" alt="profile image" />
		            <div className="profile-content">
		                <h1 className="name">{props.contact.name}</h1>
		                <h2 className="desc">{props.contact.title}</h2>
		                <ul className="social list-inline">
												{props.contact.twitterlink && <li className="list-inline-item"><a href={props.contact.twitterlink}><i className="fa svg-inline--fa fa-twitter"></i></a></li>}
		                    {props.contact.linkedinlink && <li className="list-inline-item"><a href={props.contact.linkedinlink}><i className="fa svg-inline--fa fa-linkedin"></i></a></li>}
		                    {props.contact.githublink && <li className="list-inline-item"><a href={props.contact.githublink}><i className="fa svg-inline--fa fa-github-alt"></i></a></li>}
		                    {props.contact.stackoverflowLink && <li className="list-inline-item"><a href={props.contact.stackoverflowLink}><i className="fa svg-inline--fa fa-stack-overflow"></i></a></li>}
		                    {props.contact.codepenLink && <li className="list-inline-item last-item"><a href={props.contact.codepenLink}><i className="fa svg-inline--fa fa-codepen"></i></a></li>}
		                </ul>
		            </div>
			    </div>
	            <div className="col-12 col-md-auto">
	                <a className="btn btn-cta-primary" href={props.contact.email} target="_blank"><i className="fa fa-regular fa-paper-plane"></i> Contact Me</a>
	            </div>
	        </div>
        </div>
    </header>
      </div>
    );
  }

	export default Header;