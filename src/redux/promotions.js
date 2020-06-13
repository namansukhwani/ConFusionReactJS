import * as ActionType from './ActionTypes';

export const Promotions=(state={
    isLoading:true,
        errMess:null,
        promotions:[]
},action) => {
    switch(action.type){
        case ActionType.ADD_PROMOS:
            return {...state,isLoading:false,errMess:null,promotions:action.payload}

        case ActionType.PROMOS_LOADING:
            return {...state,isLoading:true,errMess:null,promotions:[]}

        case ActionType.PROMOS_FAILED:
            return {...state,isLoading:false,errMess:action.payload,promotions:[]} 

        default:
            return state;
    };
}