import * as React from "react";
let Logo ="https://logrocket-assets.io/static/home-hero-c97849b227a3d3015730e3371a76a7f0.svg";
export default class FirstComponent extends React.Component <{}> {
  render() {
    return (
        <footer className="footer">
        <div className="container text-center">
                <small className="copyright">Designed with <span className="sr-only">love</span><i className="fa fa-heart"></i> by <a href="https://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
                <br/>
                <small className="copyright">Adapted for React and Typescript with <span className="sr-only">love</span><i className="fa fa-heart"></i> by <a href="https://themes.3rdwavemedia.com" target="_blank">Holly Stefan</a> for developers</small>
        </div>
    </footer>
    );
  }
}