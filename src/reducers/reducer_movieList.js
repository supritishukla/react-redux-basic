import { FETCH_MOVIE } from "../actions/action_movieSearch.js";

export default function(state=null, action){
    switch(action.type){
        case FETCH_MOVIE:
        return  action.payload.data;

    }
    return state;
}