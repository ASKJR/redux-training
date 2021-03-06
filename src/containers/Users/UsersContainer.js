import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Users from "../../components/Users/Users";
import { connect } from "react-redux";
import { fetchUsers } from "../../store/actions/users";
import Button from "../../components/UI/Button";
import { FaPlus } from "react-icons/fa";

class UsersContainer extends Component {
  componentDidMount() {
    if (this.props.fetchOnMount) {
      this.props.fetchData();
    }
  }

  render() {
    return (
      <Container>
        <Button type="success" clicked={() => this.props.fetchData(1)}>
          <FaPlus />
        </Button>
        <Users title="Users" users={this.props.users} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    fetchOnMount: state.users.fetchOnMount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (qty) => dispatch(fetchUsers(qty)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
