import {} from '../actions/actions'

export default useReducer(usersState, action){
    switch(action.type){
        case getUser():
            return ;
        case createUser():
            return ;
        case updateUser():
            return ;
        case deleteUser():
            return ;
        default:
            return ;
    }
}