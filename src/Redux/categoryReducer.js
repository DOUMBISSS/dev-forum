const initialState = {
    categories: [],
}

export function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case "GET-CATEGORY-HOMES": {
            return { 
                // console.log(action.payload)
                ...state,rentHomes : action.payload
            }
        }
        default: {
            return state
        }
    }
  
}
