import React, { Component } from 'react';
import './App.css';
import HomeView from './components/HomeView'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreatureView from './components/CreatureView'
import axios from 'axios'

class App extends Component {

  state = {
    creature: []
  }

  componentDidMount() {
    axios.get('/api/creatures').then((res) => {
      this.setState({
        creature: res.data
      })
    }).catch((err) => {
      console.log(err)

    })
  }

 


  render() {

    const HomeWrapper = (props) => {
      return <HomeView creature={this.state.creature} {...props}/>
    }

    const CreatureWrapper = (props) => {
      return <CreatureView creature={this.state.creature} {...props}/>
    }

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/creatures' render={HomeWrapper} />
            <Route exact path='/creatures/:id' render={CreatureWrapper} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
