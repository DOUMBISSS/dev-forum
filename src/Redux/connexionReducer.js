


const initialState = {
    email:[]
}

export function connexionReducer(state = initialState, action) {
    switch (action.type) {
        case "GET-USER": {
            return {
                ...state,email :[...state.email,action.payload]
            } 
        }
        default: {
            return state
        }
    }
  
}