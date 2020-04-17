import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, authentication, ...rest }) => (

  <Route {...rest} render={(props) => (
    authentication.operationType === 'signIn' ? (
      <Component {...props}/>
    ) : (

        <Redirect to={{
          pathname: '/login',
          state: { from: props.location },
        }} />


    )
  )} />
);


const mapStateToProps = (state) => ({
  authentication: state.authentication,
});
export default connect(
  mapStateToProps,
)(PrivateRoute);
