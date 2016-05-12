import { combineReducers } from 'redux';
import posts from 'reducers/reducer_posts';
import selectedPosts from 'reducers/reducer_selected_posts';

const rootReducer = combineReducers({
  posts,
  selectedPosts
});

export default rootReducer;
