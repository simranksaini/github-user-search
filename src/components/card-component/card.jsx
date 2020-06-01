import React, { Component } from "react";
// import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Image } from "semantic-ui-react";
import "./card.css";

class Cardcls extends Component {
  render() {
    return (
      <div className="card">
        <Card>
          <Image src={this.props.curprof.avatar_url} wrapped ui={false} />
          <Card.Content>
            <Card.Header>
              <a href={this.props.curprof.html_url}>
                {this.props.curprof.name}
              </a>
              <br />
              <span className="company">{this.props.curprof.company}</span>
            </Card.Header>
            <Card.Meta>
              <span className="bio">{this.props.curprof.bio}</span>
            </Card.Meta>
            <Card.Description>
              <a href={this.props.curprof.repos_url}>
                Public Repositories: {this.props.curprof.public_repos}
              </a>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="user" />
            {this.props.curprof.followers} Followers
            <br />
            <Icon name="user" />
            {this.props.curprof.following} Following
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Cardcls;
