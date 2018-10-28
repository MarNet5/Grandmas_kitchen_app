import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook } from '../actions/auth';

export const LoginPage = ({ startLoginGoogle, startLoginFacebook }) => (
    <div className="box-layout">
      <div className="box-layout__box">
          <h1 className="box-layout__title">Grandma's kitchen</h1>
          <p className="box-layout__subtitle">Where sweet things happen</p>
        <button className="button" onClick={startLoginGoogle}>Login with Google</button>
        <button className="button" onClick={startLoginFacebook}>Login with Facebook</button>
        {/* <button className="button" onClick={startLoginGithub}>Login with Github</button> */}
        
      </div>
    </div>
);
        
    const mapDispatchToProps = (dispatch) => ({
        startLoginGoogle: () => dispatch(startLoginGoogle()),
        startLoginFacebook: () => dispatch(startLoginFacebook())
    });
    

    export default connect(undefined, mapDispatchToProps)(LoginPage);