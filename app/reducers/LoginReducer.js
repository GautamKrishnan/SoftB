import * as Constants from '../actions/LoginActions';

const initialState = {
    loginState: 0,
};

export default function reducer(state = initialState, action) {
    if (action.type === Constants.LOGIN) {
        return { ...state, loginState: action.loginInfo };
    } else {
        return state;
    }
}
