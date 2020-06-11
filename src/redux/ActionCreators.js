import * as ActionTypes from './ActionTypes';

export const addComment=(dishId,rating,author,comment) => ({
    type:ActionTypes.ADD_COMMENT,
    payload:{
        dishId:dishId,
        rating:rating,
        comment:comment,
        author:author
    }
});