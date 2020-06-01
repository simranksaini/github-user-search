import React, { Component } from "react";
// import "semantic-ui-css/semantic.min.css";
import { Image, Icon, List, Divider } from "semantic-ui-react";
import "./card.css";

class Cardcls extends Component {
  render() {
    const profile = this.props;
    return (
      <List>
        <List.Item>
          <div className="card">
            <img
              className="image"
              src={profile.avatar_url}
              alt="avatar"
              style={{ borderradius: "50" }}
            />
            <div className="info">
              <div className="name">
                <a href={profile.html_url}>{profile.name}</a>
              </div>
              <br />
              <div className="pbio">
                <span className="bio">{profile.bio}</span>
                <br />
                <a href={profile.repos_url}>
                  Public Repositories: {profile.public_repos}
                </a>
              </div>
            </div>
          </div>
        </List.Item>
        <Divider />
      </List>
    );
  }
}

export default Cardcls;
