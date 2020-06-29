/*
* action types
*/

export const LOGIN = 'LOGIN';

/*
* action creators
*/

export const setLoginState = loginInfo => ({
    type: LOGIN,
    loginInfo,
});
