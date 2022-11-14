


const initialState = {
    questions: [],
    question: [],
    comments:[]
}

export function questionReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD-QUESTION": {
            return {
                ...state,question :[...state.question,action.payload]
            } 
        }
        case "GET-ALL-QUESTIONS": {
            return {
                ...state,questions :action.payload
            } 
        }
        // case "ADD-COMMENT":{
        //     return {
        //         ...state,comments :[...state.comments,action.payload]
        //     }
        // }
        default: {
            return state
        }
    }
  
}