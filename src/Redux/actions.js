

export function AddQuestion(question) {
    return {
        type: 'ADD-QUESTION',
        payload: question
    }
}
export function addComment(comment){
    return {
        type: 'ADD-COMMENT',
        payload: comment
    }
}

export function addUser(user){
    return {
        type: 'GET-USER',
        payload: user
    }
}
// export function getQuestion(id) {
//     return {
//         type: 'GET-QUESTION',
//         payload: id
//     }
// }
