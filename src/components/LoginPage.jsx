import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions'

class LoginPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

  handleSubmit(event){
    event.preventDefault();
    const dispatch = this.props.dispatch;
    const {username, password} = this.state
    dispatch(userActions.login(username, password));
  }

  render(){
    const { username, password, submitted } = this.state;
    return(
      <div className="col-md-6 col-md-offset-3">
          <h2>Login</h2>
          <form name="form" onSubmit={this.handleSubmit}>
              <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                  {submitted && !username &&
                      <div className="help-block">Username is required</div>
                  }
              </div>
              <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                  {submitted && !password &&
                      <div className="help-block">Password is required</div>
                  }
              </div>
              {this.props.authentication.loginFail &&
                  <div className="help-block"> Username or password is invalid </div>
              }
              <div className="form-group">
                  <button className="btn btn-primary">Login</button>
                  <Link to="/" className="btn btn-link"> HOME</Link>
              </div>
          </form>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return state;
}

const connectedLP = connect(mapStateToProps)(LoginPage);
export {connectedLP as LoginPage};
