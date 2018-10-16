import { userConstants, urlsConstants} from '../../_constants'
import { request } from '../../_helpers'


export function loadAccounts() {
    return dispatch => {
        request.get(urlsConstants.get_accounts)
            .then(response => {
                if (response.status === 200){
                    response.json()
                        .then(data => { dispatch(success(data.accounts)) })
                }
            });
    }
    function success(accounts) { return {type: userConstants.ACCOUNTS_LOADED, accounts} }
}
