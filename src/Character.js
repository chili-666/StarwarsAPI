import React from "react";
import Homeworld from "./Homeworld";
import Films from "./Films";
import "./styles.css";

class Character extends React.Component {
  constructor() {
    super();
    this.state = {
      homeworld: {},
      loading: true,
      films: {}
    };
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    fetch(this.props.homeworld)
      .then(response => response.json())
      .then(data => {
        this.setState({
          homeworld: data,
          //name: this.props.name,
          loading: false
        });
      });
  }

  render() {
    const world = this.state.loading ? "Lädt..." : this.state.homeworld.name;
    const films = this.state.loading ? (
      "Filme laden"
    ) : (
      <Films filme={this.props.films} />
    );
    return (
      <div className="character">
        <h1>{this.props.name}</h1>
        <p>
          Birth: {this.props.birth}
          <br />
          Homeworld: {world}
          <br />
        </p>
        <div>
          <h3>Films:</h3>
          {films}
        </div>
      </div>
    );
  }
}
export default Character;
