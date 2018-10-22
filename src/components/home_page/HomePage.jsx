import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { request, history } from '../../_helpers';
import { loadAccounts } from './actions';
import { urlsConstants } from '../../_constants';
import { Ideas } from './Ideas';

const IDEAS = 'ideas';
const ASSETS = 'assets';
const PROFILE = 'profile';

const headerTitle = {};
headerTitle[IDEAS] = 'Торговые Идеи'
headerTitle[ASSETS] = 'Мои активы'
headerTitle[PROFILE] = 'Мой профиль'


class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            curLink: IDEAS,
            title: headerTitle[IDEAS],
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
        return e => {
            console.log(headerTitle, curLink);
            let title = headerTitle[curLink];
            console.log(title);
            this.setState({curLink: curLink, title: title})
        }
    }

    switcherCss(link){
        return classNames({
            'hp-header__switcher': true,
            'switcher_selected': this.state.curLink === link
        })
    }

  render(){
      return(
          <div>
            <div className='container'>
                <div className='row hp-header'>
                    <div className='container'>
                        <div className='row hp-header__title'>{this.state.title}</div>
                        <div className='row'>
                            <div className='col-md-4' onClick={this.handleClick(ASSETS)}>
                                <div className={this.switcherCss(ASSETS)}>
                                    <span className="glyphicon glyphicon-briefcase" aria-hidden="true"></span>
                                    <p>Активы</p>
                                </div>
                             </div>
                            <div className='col-md-4' onClick={this.handleClick(IDEAS)}>
                                <div className={this.switcherCss(IDEAS)}>
                                    <span className="glyphicon glyphicon-list" aria-hidden="true"></span>
                                    <p>Идеи</p>
                                </div>
                            </div>
                            <div className='col-md-4' onClick={this.handleClick(PROFILE)}>
                                <div className={this.switcherCss(PROFILE)}>
                                    <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                                    <p>Профиль</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row content'>
                { this.state.curLink === IDEAS && <Ideas/> }
                </div>
            </div>
        </div>
    );
    }
}



function mapStateToProps(state) {
    return state;
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
