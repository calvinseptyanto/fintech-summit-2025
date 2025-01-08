import React from 'react';
import './Homepage.css'; // Add custom styles here

function Homepage() {
  return (
    <div className="container bootstrap snippets bootdey">
      <div className="row">
        {/* Profile Sidebar */}
        <div className="profile-nav col-md-3">
          <div className="panel">
            <div className="user-heading round">
              <a href="#">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                  alt="User Avatar"
                  className="img-circle"
                />
              </a>
              <h1>Camila Smith</h1>
              <p>deydey@theEmail.com</p>
            </div>
            <ul className="nav nav-pills nav-stacked">
              <li className="active">
                <a href="#">
                  <i className="fa fa-user"></i> Profile
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-calendar"></i> Recent Activity{' '}
                  <span className="label label-warning pull-right r-activity">9</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-edit"></i> Edit Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Profile Main Content */}
        <div className="profile-info col-md-9">
          {/* Post Form */}
          <div className="panel">
            <form>
              <textarea
                placeholder="What's on your mind today?"
                rows="2"
                className="form-control input-lg p-text-area"
              ></textarea>
            </form>
            <footer className="panel-footer">
              <button className="btn btn-warning pull-right">Post</button>
              <ul className="nav nav-pills">
                <li>
                  <a href="#">
                    <i className="fa fa-map-marker"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-camera"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-film"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-microphone"></i>
                  </a>
                </li>
              </ul>
            </footer>
          </div>

          {/* Bio Section */}
          <div className="panel">
            <div className="bio-graph-heading">
              Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel
              ipsum. Aliquam ac magna metus.
            </div>
            <div className="panel-body bio-graph-info">
              <h1>Bio Graph</h1>
              <div className="row">
                <div className="bio-row">
                  <p>
                    <span>First Name </span>: Camila
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Last Name </span>: Smith
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Country </span>: Australia
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Birthday </span>: 13 July 1983
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Occupation </span>: UI Designer
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Email </span>: jsmith@flatlab.com
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Mobile </span>: (12) 03 4567890
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Phone </span>: 88 (02) 123456
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Panels */}
          <div className="row">
            {[35, 63, 75, 50].map((value, index) => (
              <div className="col-md-6" key={index}>
                <div className="panel">
                  <div className="panel-body">
                    <div className="bio-chart">
                      <input
                        className="knob"
                        data-width="100"
                        data-height="100"
                        data-displayprevious="true"
                        data-thickness=".2"
                        value={value}
                        data-fgcolor="#96be4b"
                        data-bgcolor="#e8e8e8"
                      />
                    </div>
                    <div className="bio-desk">
                      <h4 className="green">Project {index + 1}</h4>
                      <p>Started : 15 July</p>
                      <p>Deadline : 15 August</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
