import React, { Component } from "react";
import { connect } from "react-redux";
import { setSelectedCreation, unsetCreation } from "../actions/creations";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

class CreationPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("a");
    this.props.setSelectedCreation(id);
    console.log("g");
  }

  componentWillUnmount() {
    this.props.unsetCreation();
  }

  render() {
    const {
      name,
      image,
      category,
      location,
      date,
      notes,
      comments,
      id,
      username
    } = this.props;
    return (
      <>
        <div className='creation-page row u-center-text'>
          {!this.props.id && <div className='loader'></div>}
          <div className='col-1-of-2'>
            <h1 className='heading-secondary'>{name}</h1>
            <img className='creation-page__image' src={image} alt={name}></img>
            <h2 className='heading-tertiary'>
              Category - {category && category.name}
            </h2>
          </div>
          <div className='info'>
            <p>
              <span className='creation-page-info u-margin-top-medium'>
                Created by {username}:
              </span>
            </p>
            <p>
              <span className='creation-page-info u-margin-top-small'>
                City: {location.city}{" "}
              </span>
            </p>
            <p>
              <span className='creation-page-info u-margin-top-small'>
                Country: {location.country}{" "}
              </span>
            </p>
            <p>
              <span className='creation-page-info u-margin-top-small'>
                published on: {date}{" "}
              </span>
            </p>
            <h4 className='u-margin-top-small'>Notes: {notes}</h4>
          </div>
        </div>
        <div></div>
        <div className='comment-container'>
          {comments && comments.length > 0 ? (
            <h3 className='heading-secondary'>Comments:</h3>
          ) : null}
          <div className='comment-container__box'>
            {comments &&
              comments.map((comment) => (
                <CommentCard key={comment.id} {...comment} />
              ))}
          </div>
          <h4 className='creations-page-info'>Add Comment:</h4>
          {this.props.currentUser.id && <CommentForm creation_id={id} />}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.creations.selectedCreation,
  currentUser: state.currentUser.currentUser
});

export default connect(mapStateToProps, { setSelectedCreation, unsetCreation })(
  CreationPage
);
