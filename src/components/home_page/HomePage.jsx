import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { request, history } from '../../_helpers';
import { urlsConstants } from '../../_constants';
import { Ideas } from './Ideas';
import { Accounts } from './accounts'
import './homepage.css'

const IDEAS = 'ideas';
const ACCOUNTS = 'accounts';
const PROFILE = 'profile';

const headerTitle = {};
headerTitle[IDEAS] = 'Торговые Идеи'
headerTitle[ACCOUNTS] = 'Мои активы'
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
        request.get(urlsConstants.get_info)
            .then(response => {
                if (response.status === 403){
                    history.push('/login')
                }
            });
    }

    handleClick(curLink){
        return e => {
            let title = headerTitle[curLink];
            this.setState({curLink: curLink, title: title})
        }
    }

    switcherCss(link){
        return classNames({
            'hp-header__switcher': true,
            'hp-header__switcher_selected': this.state.curLink === link
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
                            <div className='col-xs-4' onClick={this.handleClick(ACCOUNTS)}>
                                <div className={this.switcherCss(ACCOUNTS)}>
                                    <span className="glyphicon glyphicon-briefcase" aria-hidden="true"></span>
                                    <p>Активы</p>
                                </div>
                             </div>
                            <div className='col-xs-4' onClick={this.handleClick(IDEAS)}>
                                <div className={this.switcherCss(IDEAS)}>
                                    <span className="glyphicon glyphicon-list" aria-hidden="true"></span>
                                    <p>Идеи</p>
                                </div>
                            </div>
                            <div className='col-xs-4' onClick={this.handleClick(PROFILE)}>
                                <div className={this.switcherCss(PROFILE)}>
                                    <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                                    <p>Профиль</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                { this.state.curLink === IDEAS && <Ideas/> }
                { this.state.curLink === ACCOUNTS && <Accounts/> }
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
