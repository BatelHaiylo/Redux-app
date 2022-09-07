import {GET_USER_BY_ID, ADD_USER, UPDATE__USER, DELETE_USER} from './action-type'


export const getUserById = () => {
    return {type:GET_USER_BY_ID , payload:user}
}
export const addUser = (user) => {
    return {type:ADD_USER , payload:user}
}
export const updateUser = ({user}) => {
    return {type:UPDATE__USER , payload:{user}}
}
export const deleteUser = (userId) => {
    return {type:DELETE_USER , payload:userId}
}