import React from 'react';
import { connect } from 'react-redux';

//This is your custom selector
import SelectedPostsSelector from 'selectors/selected_posts';

const SelectedPostsList = (props) => {
  return (
    <ul className="list-group">
      {
        props.posts.map(post => {
          return <li className="list-group-item" key={post.id}>{post.title}</li>
        })
      }
    </ul>
  );
};


// Wiring up of the SelectedPostsSelector
// ============================================================================
const mapStateToProps = state => {
  return {
    // Pass in the global application state to the selector
    posts: SelectedPostsSelector(state)
  };
};

export default connect(mapStateToProps)(SelectedPostsList);
// Wiring up of the SelectedPostsSelector =====================================
