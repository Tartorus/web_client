import React from 'react';
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
        <h1>HomePage {user.name}</h1>
      </div>
    );
  }
}

export default HomePage;
