import './App.css';
import image1 from "./img1.jpeg";
import image2 from "./img2.jpeg";
import image3 from "./img3.jpeg";
import image4 from "./img4.jpeg";
import image5 from "./img5.jpeg";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import React from 'react';

const img1 = React.createElement("img", {className: "image", src:{image1}, width:"300px", height:"300px"});
const img2 = React.createElement("img", {className: "image", src:{image2}, width:"300px", height:"300px"});
const img3 = React.createElement("img", {className: "image", src:{image3}, width:"300px", height:"300px"});
const img4 = React.createElement("img", {className: "image", src:{image4}, width:"300px", height:"300px"});
const img5 = React.createElement("img", {className: "image", src:{image5}, width:"300px", height:"300px"});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Mahabalipuram
      </header>
      <div className="content">
        <p className="p1">
          Mahabalipuram is a small town situated in the southeastern part of Tamil Nadu, stretching between the 
        Bay of Bengal and the Great Salt Lake. It is a renowned representative city of our rich Indian culture and heritage. It 
        is mainly a seaport, which lies 58 km away from the capital city Chennai.
        </p>

        <p className="p2">
        Mahabalipuram is a place that is famous for its temples and monuments, especially the very famous Shore Temple. 
        It consists of three temples built in one single complex, that was constructed way back in the 8th century.
        </p>
      </div>

      <div className="gallery">
        <h3> Gallery</h3>
        <div className="images">
          <BrowserRouter>
          <Link to="/place1">{img1}</Link>
          <Link to="/place2">{img2}</Link>
          <Link to="/place3">{img3}</Link>
          <Link to="/place4">{img4}</Link>
          <Link to="/place5">{img5}</Link>
          <Switch>
            <Route path="/place1"><Place1/></Route>
            <Route path="/place2"><Place2/></Route>
            <Route path="/place3"><Place3/></Route>
            <Route path="/place4"><Place4/></Route>
            <Route path="/place5"><Place5/></Route>
          </Switch>
          </BrowserRouter>
        </div>
      </div>

    </div>
  );
}

class Place1 extends React.Component{
  render(){
    return(
      <div className="place"><h1>Place 1</h1></div>
    );
  }
}

class Place2 extends React.Component{
  render(){
    return(
      <div className="place"><h1>Place 2</h1></div>
    );
  }
}

class Place3 extends React.Component{
  render(){
    return(
      <div className="place"><h1>Place 3</h1></div>
    );
  }
}

class Place4 extends React.Component{
  render(){
    return(
      <div className="place"><h1>Place 4</h1></div>
    );
  }
}

class Place5 extends React.Component{
  render(){
    return(
      <div className="place">
        <h1>Place 5</h1>
        <p>
          This is place 5.
        </p>
      </div>
    );
  }
}

export default App;
