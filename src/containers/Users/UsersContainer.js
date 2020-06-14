import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Users from "../../components/Users/Users";
import { connect } from "react-redux";
import { fetchUsers } from "../../store/actions";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.onMount();
  }
  render() {
    return (
      <Container>
        <Users title="Users" users={this.props.users} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
