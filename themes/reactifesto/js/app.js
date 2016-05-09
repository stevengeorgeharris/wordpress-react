import React, {Component} from 'react';
import {render} from 'react-dom';
import Posts from './components/home';
const URL = "http://reactifesto.dev/wp-json/wp/v2/posts?_embed";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    $.get(URL, (result) => {
      let posts = result;
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div className="posts">
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
