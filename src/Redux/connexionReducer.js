


const initialState = {
    email:[],
    user:[]
}

export function connexionReducer(state = initialState, action) {
    switch (action.type) {
        case "GET-NEW-USER": {
            return {
                ...state,user : action.payload
            } 
        }
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