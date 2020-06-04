import React, { Component } from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import Member from './components/Member';

export default class App extends Component {
  constructor() {
    super();
    this.state = { members: [] };
  }

  componentDidMount() {
    this.setState({
      members: [
        { name: "Syd Barrett", role: "Vocals and Guitar", birthday: "6 January 1946", img: "https://img.discogs.com/6P-pwemJt-41PQ5MrXHYDbgNsaI=/600x450/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-178489-1128224435.jpeg.jpg" },
        { name: "Roger Waters", role: "Vocals and Bass", birthday: "6 September 1943", img: "https://img.discogs.com/6P-pwemJt-41PQ5MrXHYDbgNsaI=/600x450/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-178489-1128224435.jpeg.jpg" },
        { name: "David Gilmour", role: "Vocals and Lead", birthday: "6 March 1946", img: "https://img.discogs.com/6P-pwemJt-41PQ5MrXHYDbgNsaI=/600x450/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-178489-1128224435.jpeg.jpg" },
        { name: "Rick Wright", role: "Vocals and Keyboard", birthday: "28 July 1943", img: "https://img.discogs.com/6P-pwemJt-41PQ5MrXHYDbgNsaI=/600x450/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-178489-1128224435.jpeg.jpg" },
        { name: "Nick Mason", role: "Drums and Percussions", birthday: "27 January 1944", img: "https://img.discogs.com/6P-pwemJt-41PQ5MrXHYDbgNsaI=/600x450/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-178489-1128224435.jpeg.jpg" }
      ]
    })
  }

  render() {
    let barrett = this.state.members.find(mem => mem.name === 'Syd Barrett');
    let waters = this.state.members.find(mem => mem.name === 'Roger Waters');
    let gilmour = this.state.members.find(mem => mem.name === 'David Gilmour');
    let wright = this.state.members.find(mem => mem.name === 'Rick Wright');
    let mason = this.state.members.find(mem => mem.name === 'Nick Mason');

    return (
      <>
        <Nav></Nav>
        <Switch>
          <Route key="1" path="/barrett">
            <Member data={barrett}></Member>
          </Route>
          <Route key="2" path="/waters">
            <Member data={waters}></Member>
          </Route>
          <Route key="3" path="/gilmour">
            <Member data={gilmour}></Member>
          </Route>
          <Route key="4" path="/wright">
            <Member data={wright}></Member>
          </Route>
          <Route key="5" path="/mason">
            <Member data={mason}></Member>
          </Route>
        </Switch>
      </>
    )
  }
}
