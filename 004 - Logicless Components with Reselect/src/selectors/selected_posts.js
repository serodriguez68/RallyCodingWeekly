// Reselect selector
// Takes a list of posts and post Ids, and picks out
// the selected Posts
import _ from 'lodash';
import { createSelector } from 'reselect';

// Create select functions to pick off the pieces of state we care about
// for this calculation
const postsSelector = state => state.posts
const selectedPostsSelector = state => state.selectedPostIds

// Arg 1: whatever comes out of const postsSelector
// Arg 2: whatever comes out of selectedPostsSelector
const getPosts = (posts, selectedPostIds) => {
  const selectedPosts = _.filter(
    posts,
    post => _.contains(selectedPostIds, post.id)
  );

  return selectedPosts;
};

// Wiring up of selector:
// Arg 1..(n-1): State selecting functions. Whenever the glboal redux state changes
// each of this functions are going to be executed.
// Arg n: whatever value is produced by the state selecting functions is passed
// to the last function (the select logic function) if the values of the selected
// functions have changed
export default createSelector(
  postsSelector, // pick off a piece of state
  selectedPostsSelector, // pick off a piece of state
  getPosts // last argument is the function that has our select logic
);
