import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { history } from '../_helpers';
import { userActions } from '../_actions'

const IDEAS = 'ideas';
const ASSETS = 'assets'

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            curLink: IDEAS
        }
    }

    componentWillMount(){
        if (!this.props.authentication.userkey){
            history.push('/login');
        };
        if (this.props.accounts.loaded === false){
          this.props.dispatch(userActions.loadAccounts())
        }
    }

    handleClick(curLink){
        return e => { this.setState({curLink}) }
    }

  render(){
    return(
      <div>
        <h1>HomePage</h1>

        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className={"nav-link " + (this.state.curLink === IDEAS ? 'active' : '')} href="#" onClick={this.handleClick(IDEAS)}>Идеи</a>
            </li>
            <li className="nav-item">
                <a className={"nav-link " + (this.state.curLink === ASSETS ? 'active' : '')} href="#" onClick={this.handleClick(ASSETS)}>Активы</a>
            </li>
        </ul>

        { this.state.curLink === IDEAS && <div>IDEAS</div> }
        { this.state.curLink === ASSETS && <div>ASSETS</div> }

      </div>
    );
  }
}



function mapStateToProps(state) {
    return state;
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
