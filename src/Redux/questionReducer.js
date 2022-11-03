


const initialState = {
    questions: [],
    comments:[]
}

export function questionReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD-QUESTION": {
            return {
                ...state,questions :[...state.questions,action.payload]
            } 
        }
        case "ADD-COMMENT":{
            return {
                ...state,comments :[...state.comments,action.payload]
            }
        }
        default: {
            return state
        }
    }
  
}