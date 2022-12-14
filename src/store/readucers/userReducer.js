import {GET_USER, ADD_USER, UPDATE__USER, DELETE_USER} from '../actions/usersAction-type'

export default function usersReducer(state = [], action){
    switch(action.type){
        case GET_USER:
            return [...state];
        case ADD_USER:
            return [...state,action.payload];
        case UPDATE__USER:
            const wanntedObj = state.filter(objInArray => objInArray.id === action.payload.id)
            if(wanntedObj.length!=0){state[state.indexOf(wanntedObj[0])] = action.payload};
            return [...state];
        case DELETE_USER:
            let filteredArray = state.filter(objInArray => objInArray.id === action.payload)
            return state = filteredArray;
        default:
            return state ;
    }
}