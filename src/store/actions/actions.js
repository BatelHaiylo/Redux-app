import {GET_USER, ADD_USER, UPDATE__USER, DELETE_USER} from './action-type'


const getUser = () => {
    return {type:GET_USER , payload:user}
}
const addUser = (user) => {
    return {type:ADD_USER , payload:user}
}
const updateUser = ({user}) => {
    return {type:UPDATE__USER , payload:{user}}
}
const deleteUser = (userId) => {
    return {type:DELETE_USER , payload:userId}
}
export{
    getUser,
    addUser,
    updateUser,
    deleteUser
}