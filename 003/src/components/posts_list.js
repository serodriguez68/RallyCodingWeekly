import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class PostsList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPost(post) {
    return (
      <li>
        <input type="checkbox" onChange={e => console.log(e.target.checked)} />
        {post.title}
      </li>
    );
  }

  render() {
    console.log(this.props.selectedPosts)

    return (
      <ul>
        {_.map(this.props.posts, this.renderPost.bind(this))}
      </ul>
    );
  }
}

export default connect(({posts, selectedPosts}) => ({posts, selectedPosts}) , actions)(PostsList)
