import React from 'react';
import { loadAccounts } from './actions';
import { connect } from 'react-redux';
import { formatMoney } from '../../_helpers'
import './accounts.css';

// TODO:
const contractMap = {
    0: 'ДУ',
    1: 'БО',
    2: 'ИИС ДУ',
    3: 'ИИС БО',
    4: 'ДЕПО'
}

class Accounts extends React.Component{
    componentWillMount(){
        if (this.props.accountsInfo.loaded === false){
            this.props.dispatch(loadAccounts())
        }
    }

    detailedAccountInfo(){
        let rowList = [];
        this.props.accountsInfo.accounts.forEach(account => {
            rowList.push(
                <div className='row account account_selectable' key={account.id}>
                    <div className='col-xs-6 account__left'>
                        <b>
                            {contractMap[account.account_info.contract_type]}<br/>
                            {formatMoney(account.summary.balance)} &#x20bd;
                        </b>
                    </div>
                    <div className='col-xs-6 account__right'>
                        <b>
                            {formatMoney(account.summary.income_total)} &#x20bd;<br/>
                            {formatMoney(account.summary.income_total_percent * 100)}%
                        </b>
                    </div>
                </div>
            )
        })
        return rowList;
    }

    loadedAccounts(){
        let accountsInfo = this.props.accountsInfo;
        console.log(accountsInfo);
        return(
            <div className='container'>
                {/* total informations */}
                <div className='row account'>
                    <div className='col-xs-6 account__left'>
                        Стоимость всех активов <br/>
                        <b> {formatMoney(accountsInfo.summary.total_value)} &#x20bd;</b><br/>
                        Остаток {formatMoney(accountsInfo.summary.balance)} &#x20bd;
                    </div>
                    <div className='col-xs-6 account__right'>
                        Доход с открытия <br/>
                        <b>
                            {formatMoney(accountsInfo.summary.income_total)} &#x20bd;<br/>
                            {formatMoney(accountsInfo.summary.income_total_percent * 100)}%
                        </b>
                    </div>
                </div>

                {/* Detailde account info*/}
                {this.detailedAccountInfo()}

            </div>
    )}

    loadingAccounts(){
        return(<p>loading</p>)
    }

    render(){
        let accountsInfo = this.props.accountsInfo;
        return (
            <div>
                {accountsInfo.loaded ? this.loadedAccounts() : this.loadingAccounts()}
            </div>
    )}
}

function mapStateToProps(state) {
    return state;

}

const connectedAccounts = connect(mapStateToProps)(Accounts)
export { connectedAccounts as Accounts}
