import * as Constants from '../actions/EmployeeActions';

const initialState = {
    employeesData: [],
};

export default function reducer(state = initialState, action) {
    if (action.type === Constants.EMPLOYEES_UPDATED) {
        return { ...state, employeesData: action.employeesList };
    } else {
        return state;
    }
}
