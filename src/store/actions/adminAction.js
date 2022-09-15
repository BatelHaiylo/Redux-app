import {GET_ADMIN,ADD_ADMIN,UPDATE__ADMIN,DELETE_ADMIN} from '../actions/adminAction-Type'


const getUser = () => {
    return {type:GET_ADMIN}
}
const addUser = (user) => {
    return {type:ADD_ADMIN , payload:user}
}
const updateUser = (user) => {
    return {type:UPDATE__ADMIN , payload:user}
}
const deleteUser = (userId) => {
    return {type:DELETE_ADMIN , payload:userId}
}
export{
    getUser,
    addUser,
    updateUser,
    deleteUser
}