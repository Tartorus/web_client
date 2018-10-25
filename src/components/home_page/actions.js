import { userConstants, urlsConstants} from '../../_constants'
import { request } from '../../_helpers'


export function loadAccounts() {
    return dispatch => {
        let response = request.get(urlsConstants.get_accounts);
        response.then(response => {
            if (response.status === 200){
                response.json().then(data => {
                     dispatch(success(data)) })
            }
                // TODO: handle exceptions
            });
    }
    function success(data) { return {type: userConstants.ACCOUNTS_LOADED, data} };
}
