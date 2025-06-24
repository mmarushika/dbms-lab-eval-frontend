import { api } from "./axios.mjs";
export const url_questions = "/v1/dbms/questions";
export const url_submissions = "/v1/dbms/submissions";
export const url_evaluation = "/v1/dbms/evaluation";

export async function apiFetchQuestion(questionId) {
    let response;
    try {
        response = await api.get(url_questions, {
            params: {
                id : questionId
            }
        });
    } catch(error) {
        console.log(error);
    }
    console.log(response.data);
    return response.data;
}

export async function apiFetchSubmissions(userId, taskId, questionId) {
    let response;
    try {
        response = await api.get(url_submissions, {
            params: {
                userId: userId,
                taskId: taskId,
                questionId : questionId
            }
        });
    } catch(error) {
        console.log(error);
    }
    console.log(response.data);
    return response.data;
}


export async function apiEvaluateSolution(data) {
    console.log(data);
    let response;
    try {
        response = await api.post(url_evaluation, data);
    } catch(error) {
        console.log(error);
    }
    console.log(response.data);
    return response.data;
}

export async function apiSubmitSolution(input) {
    console.log(input);
    let response;
    try {
        response = await api.post(url_submissions, input);
    } catch(error) {
        console.log(error);
    }
    console.log(response.data);
    return response.data;
}


