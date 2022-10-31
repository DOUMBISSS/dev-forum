

export function getHomes(homes) {
    return {
        type: 'GET-HOMES',
        payload: homes
    }
}

export function getRentHomes(homes){
    return{
        type: 'GET-RENT-HOMES',
        payload: homes
    }
}

export function getCategoryHome(homes){
    return {
        type: 'GET-CATEGORY-HOMES',
        payload : homes
    }
}