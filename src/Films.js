import React from "react";

class Films extends React.Component {
  constructor() {
    super();
    this.state = {
      title: [],
      loading: true
    };
  }

  componentDidMount() {
    let i = 0;
    //console.log('Länge', this.props.filme.length)
    for (i; i < this.props.filme.length; i++) {
      /*this.setState({
          loading: true
        })*/
      //console.log("Prop-Films:", this.props.filme[i]);
      fetch(this.props.filme[i])
        .then(response => response.json())
        .then(data => {
          //console.log('Antwort',data.title)/*{
          this.setState({
            title: [...this.state.title, data.title],
            //name: this.props.name,
            loading: false
          });
        });
    }
  }

  render() {
    let movies = [];
    if (this.state.loading === true) {
    } else {
      for (let x = 0; x < this.state.title.length; x++) {
        movies.push(this.state.title[x]);
        /*console.log("Titel", this.state.loading + "///" + this.state.title)*/
      }
    }
    const movieList = movies.map(movie => (
      <li>
        <a href="#">{movie}</a>
      </li>
    ));
    return (
      <div>
        {" "}
        {this.state.loading ? (
          "Loading..."
        ) : (
          <ul>
            <a href="#">{movieList}</a>
          </ul>
        )}
      </div>
    );
  }
}
export default Films;
