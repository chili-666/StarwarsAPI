import React, { Component } from "react";
import Character from "./Character";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      character: {}
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/people")
      .then(response => response.json())
      .then(data => {
        this.setState({
          character: data.results,
          loading: false
        });
      });
  }

  render() {
    console.log(this.state.character.films);
    const text = this.state.loading
      ? "Loading..."
      : this.state.character.map(item => (
          <Character
            name={item.name}
            birth={item.birth_year}
            films={item.films}
            homeworld={item.homeworld}
          />
        ));

    // console.log(this.state.character);

    console.log(text);
    return <content className="container">{text}</content>;
  }
}
export default App;
