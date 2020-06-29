/*
* action types
*/

export const EMPLOYEES_UPDATED = 'EMPLOYEES_UPDATED';

/*
* action creators
*/

export const setEmployeesData = employeesList => ({
    type: EMPLOYEES_UPDATED,
    employeesList,
});
