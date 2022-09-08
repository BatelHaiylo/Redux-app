import {getUser,addUser,updateUser,deleteUser} from '../actions/actions'

export default function useReducer({users}, action){
    switch(action.type){
        case getUser():
            return [...users];
        case addUser():
            return [...users,action.payload];
        case updateUser():
            const wanntedObj = users.filter(objInArray => objInArray.id === action.payload.id)
            if(wanntedObj.length!=0){users[users.indexOf(wanntedObj[0])] = action.payload};
            return [...users];
        case deleteUser():
            let filteredArray = users.filter(objInArray => objInArray.id === action.payload)
            return filteredArray;
        default:
            return users ;
    }
}