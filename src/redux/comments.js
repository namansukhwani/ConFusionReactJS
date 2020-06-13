import * as ActionType from './ActionTypes';

export const Comments=(state={
    errMess:null,
    comments:[]
} ,action) => {
    switch(action.type){
        case ActionType.ADD_COMMENT:
            var Comment = action.payload;
            Comment.id = state.comments.length;
            Comment.date = new Date().toISOString();
            return{...state, comments: state.comments.concat(Comment)};
            
        case ActionType.ADD_COMMENTS:
            return {...state,errMess:null,comments:action.payload}
    
        case ActionType.COMMENTS_FAILED:
            return {...state,errMess:action.payload} 
        
        default:
            return state;
    };
}