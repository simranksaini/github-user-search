import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar-component/navbar';
import CardList from './components/card-component/cardList';
import CardDetail from './components/card-component/cardDetail';
import InpVal from './components/form-component/form';
import Cardcls from './components/card-component/card';
import { Grid, Divider, Segment, Icon } from 'semantic-ui-react'


class App extends Component {
  state = {
      curprof: {},
      profiles: [],
    };
    addNewProfile = (profileData) => {
  	this.setState(prevState => ({
      curprof: profileData,
    	profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div>
      	  <div className="header">
            {this.props.title}
          </div>
          <Navbar />
          <InpVal onSubmit={this.addNewProfile} />
          <Segment>

          <Grid columns='equal' relaxed='very'>
            <Grid.Column>
              <Cardcls curprof={this.state.curprof} />
            </Grid.Column>
            <Grid.Column width={7}>
              <CardList profiles={this.state.profiles} />
            </Grid.Column>
          </Grid>
          <Divider vertical>
            <Icon  name='github' />
          </Divider>
          </Segment>

      	</div>
    );
  }

}

export default App;
