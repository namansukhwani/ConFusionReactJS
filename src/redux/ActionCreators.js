import * as ActionTypes from './ActionTypes';

export const addComment=(dishID,rating,author,comment) => ({
    type:ActionTypes.ADD_COMMENT,
    payload:{
        dishID:dishID,
        rating:rating,
        comment:comment,
        author:author
    }
});