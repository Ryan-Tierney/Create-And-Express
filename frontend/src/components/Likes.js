import React, { Component } from "react";
import { connect } from "react-redux";
import { addLike, subtractLike } from "../actions/creations";
class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

  increment = () => {
    console.log(this.props);
    this.props.addLike(this.props.creationid);
  };

  decrement = () => {
    console.log(this.props);
    this.props.subtractLike(this.props.creationid);
  };

  render() {
    return (
      <div className='like-btn'>
        <button
          className='addlike'
          type='button'
          id='plus'
          onClick={this.increment.bind(this)}
        >
          +
        </button>
        {this.props.likes}
        <button
          className='subtractlike'
          type='button'
          id='minus'
          onClick={this.decrement.bind(this)}
        >
          -
        </button>
        <h4>Likes</h4>
      </div>
    );
  }
}

export default connect(null, { addLike, subtractLike })(Likes);
