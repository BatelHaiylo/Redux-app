import {getUserById,addUser,updateUser,deleteUser} from '../actions/actions'

export default function useReducer({users}, action){
    switch(action.type){
        case getUserById():
            return ;
        case addUser():
            return [...users,action.payload];
        case updateUser():
            return ;
        case deleteUser():
            return ;
        default:
            return {users} ;
    }
}