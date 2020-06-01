import React from "react";
import CardDetail from "./cardDetail";
import { Card, Feed } from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";

const CardList = props => (
  <div className="CardList">
    <Card>
      <Card.Content style={{ backgroundcolor: "rgb(233, 224, 222)" }}>
        <Card.Header>Viewed Profiles</Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Content>
              <Feed.Summary>
                {props.profiles.map(profile => (
                  <CardDetail key={profile.id} {...profile} />
                ))}
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
    </Card>
  </div>
);

export default CardList;
