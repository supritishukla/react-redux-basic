import { FETCH_MOVIE } from "../actions/action_movieSearch.js";

export default function(state=[], action){
    switch(action.type){
        case FETCH_MOVIE:
        console.log([ action.payload.data ]);
          return  [ action.payload.data ];

    }
    return state;
}