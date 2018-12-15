import React, { Component } from 'react';
import './App.css';
import Example from './components/Carousel';
import Services from "./components/services"
import FeatureCourse from "./components/featureCourse"
import FeatureUni from "./components/featureUni"
import Enroll from "./components/enroll"
import News from "./components/News"


class App extends Component {
  render() {
    return (
      <div className="App">
      <Example />
      <FeatureCourse />
      <FeatureUni />
      <Enroll />
      <News />
      <Services />
      
      </div>
    );
  }
}

export default App;
