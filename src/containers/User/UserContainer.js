import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "../../components/UI/Button";
import { connect } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import Profile from "../../components/Users/User/Profile/Profile";
import { removeUser } from "../../store/actions";

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

  removeUserHandler = (uuid) => {
    this.props.removeUser(uuid);
    this.props.history.push("/");
  };

  render() {
    let profile = null;
    if (this.state.user) {
      profile = (
        <React.Fragment>
          <Button
            type="danger"
            clicked={() => this.removeUserHandler(this.state.user.login.uuid)}
          >
            <FaTrashAlt />
          </Button>
          <Profile user={this.state.user} />
        </React.Fragment>
      );
    }
    return <Container>{profile}</Container>;
  }
}

const mapPropsToState = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: (uuid) => dispatch(removeUser(uuid)),
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(UserContainer);
