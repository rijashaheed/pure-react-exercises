import React from "react";
import axios from "axios";

export default class Reddit extends React.Component {
  state = {
    posts: [],
    error: "",
  };

  componentDidMount() {
    axios
      .get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then((res) => {
        console.log(
          "res",
          res.data.data.children.map((obj) => obj.data)
        );
        const posts = res.data.data.children.map((obj) => obj.data);
        this.setState({ posts });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error });
      });
  }

  render() {
    return (
      <div>
        {this.state.error ? (
          <p>Error: Subreddit name is wrong</p>
        ) : (
          <>
            <h1>{`/r/${this.props.subreddit}`}</h1>
            <ul>
              {this.state.posts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
