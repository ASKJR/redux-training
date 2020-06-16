import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "../../components/UI/Button";
import { connect } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import Profile from "../../components/Users/User/Profile/Profile";

class UserContainer extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    const [user] = this.props.users.filter(
      ({ login }) => login.uuid === this.props.match.params.userId
    );
    this.setState({ user });
  }

  render() {
    const profile = this.state.user ? <Profile user={this.state.user} /> : null;
    return (
      <Container>
        <Button type="danger">
          <FaTrashAlt />
        </Button>
        {profile}
      </Container>
    );
  }
}

const mapPropsToState = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapPropsToState)(UserContainer);
