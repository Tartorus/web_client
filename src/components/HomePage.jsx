import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {history} from '../_helpers';

class HomePage extends React.Component {

  render_redirect(user){
    if (!user){
      history.push('/login');
    }
  }

  render(){
    const {user} = this.props;
    return(
      <div>
        {this.render_redirect(user)}
        <h1>HomePage {user ? user.username : 'Anonim'}</h1>
        <Link to="/login" className="btn btn-link"> LOGIN</Link>
      </div>
    );
  }
}



function mapStateToProps(state) {
  console.log(state);
    const { user } = state.authentication;
    return { user };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
