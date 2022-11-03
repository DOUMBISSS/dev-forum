


const initialState = {
    questions: [],
}

export function questionReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD-QUESTION": {
            return {
                ...state,questions :[...state.questions,action.payload]
            }
            // console.log(action.payload)
        }
        default: {
            return state
        }
    }
  
}