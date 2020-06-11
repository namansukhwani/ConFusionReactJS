import {COMMENTS} from '../shared/comments';
import * as ActionType from './ActionTypes';

export const Comments=(state=COMMENTS ,action) => {
    switch(action.type){
        case ActionType.ADD_COMMENT:
            var Comment = action.payload;
            Comment.id = state.length;
            Comment.date = new Date().toISOString();
            return state.concat(Comment);
            
        default:
            return state;
    };
}