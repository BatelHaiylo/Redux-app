import {GET_ADMIN,ADD_ADMIN,UPDATE__ADMIN,DELETE_ADMIN} from '../actions/adminAction-Type'

export default function adminReducer(state = [], action){
    switch(action.type){
        case GET_ADMIN:
            return [...state];
        case ADD_ADMIN:
            return [...state,action.payload];
        case UPDATE__ADMIN:
            const wanntedObj = state.filter(objInArray => objInArray.id === action.payload.id)
            if(wanntedObj.length!=0){state[state.indexOf(wanntedObj[0])] = action.payload};
            return [...state];
        case DELETE_ADMIN:
            let filteredArray = state.filter(objInArray => objInArray.id === action.payload)
            return state = filteredArray;
        default:
            return state ;
    }
}