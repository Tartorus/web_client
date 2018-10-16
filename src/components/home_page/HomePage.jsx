import React from 'react';
import { connect } from 'react-redux';
import { request, history } from '../../_helpers';
import { loadAccounts } from './actions';
import { urlsConstants } from '../../_constants';
import { Ideas } from './Ideas';

const IDEAS = 'ideas';
const ASSETS = 'assets'

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            curLink: IDEAS,

        }
    }

    componentWillMount(){
        // TODO:  спрятать логику
        request.get(urlsConstants.get_info)
            .then(response => {
                if (response.status === 200){
                    if (this.props.accounts.loaded === false){
                      this.props.dispatch(loadAccounts())
                    }
                }
                else if (response.status === 403){
                    history.push('/login')
                }
            });
    }

    handleClick(curLink){
        return e => { this.setState({curLink}) }
    }

  render(){
    return(
      <div>
        <h1>HomePage</h1>
        <div className="container">
            <div className='row'>
                <div className='col-md-4 col-md-offset-5'>
                    <div className="btn-group btn-group-lg" role="group">
                            <button type="button" className={"btn btn-default " + (this.state.curLink === IDEAS ? 'btn-primary' : '')} onClick={this.handleClick(IDEAS)} >Идеи</button>
                            <button type="button" className={"btn btn-default " + (this.state.curLink === ASSETS ? 'btn-primary' : '')} onClick={this.handleClick(ASSETS)}>Активы</button>
                    </div>
                </div>
            </div>
        </div>

        { this.state.curLink === IDEAS && <Ideas/> }
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
