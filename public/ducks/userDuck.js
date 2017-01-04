//actions
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';

//action creators
export function addUser(user){
    return {type: ADD_USER, user};
}

export function removeUser(){
    return {type: REMOVE_USER};
}

export default function reducer(state = {}, action = {}){
    switch(action.type){
        case ADD_USER:
            return Object.assign({}, state, action.user);
        case REMOVE_USER:
            return {};
        default:
            return {};
    }
}
