import {GET_USER, CREATE_USER, UPDATE__USER, DELETE_USER} from './action-type'

export const getUser = () => {
    return {type:GET_USER}
}
export const createUser = (user) => {
    return {type:CREATE_USER , payload:user}
}
export const updateUser = ({user}) => {
    return {type:UPDATE__USER , payload:{user}}
}
export const deleteUser = (userId) => {
    return {type:DELETE_USER , payload:userId}
}