

export function AddQuestion(question) {
    return {
        type: 'GET-QUESTION',
        payload: question
    }
}
export function getAllQuestions(questions) {
    return {
        type: 'GET-ALL-QUESTIONS',
        payload:questions
    }
}
export function addComment(comments){
    return {
        type: 'GET-COMMENT',
        payload: comments
    }
}

export function addUser(user){
    return {
        type: 'GET-USER',
        payload: user
    }
}