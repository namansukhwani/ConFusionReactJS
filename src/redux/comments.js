import * as ActionType from './ActionTypes';

export const Comments=(state={
    errMess:null,
    comments:[]
} ,action) => {
    switch(action.type){
        case ActionType.ADD_COMMENT:
            return{...state, comments: state.comments.concat(action.payload)};
            
        case ActionType.ADD_COMMENTS:
            return {...state,errMess:null,comments:action.payload}
    
        case ActionType.COMMENTS_FAILED:
            return {...state,errMess:action.payload} 
        
        default:
            return state;
    };
}