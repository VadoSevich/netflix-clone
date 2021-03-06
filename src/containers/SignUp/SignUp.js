import React from 'react';
import { connect } from 'react-redux';

import SignUp from '../../view/SignUp/SignUp';

import * as actions from '../../store/actions/index';

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);