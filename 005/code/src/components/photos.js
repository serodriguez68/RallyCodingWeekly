import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

class UserList extends Component {
  componentWillMount() {
    this.props.fetchPhotos();
  }

  renderPhotos() {
    return this.props.photos.map(photo => {
      return (
        <Link key={photo.id} to={`/photos/${photo.id}`}>
          <li className="list-group-item">
            <img src={photo.thumbnailUrl} />
          </li>
        </Link>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderPhotos()}
      </ul>
    );
  }
}

function mapStateToProps({ photos }) {
  return { photos }
}

export default connect(mapStateToProps, actions)(UserList);
