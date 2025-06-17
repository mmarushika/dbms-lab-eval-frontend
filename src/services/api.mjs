import { api } from "./axios.mjs";
export const url_questions = "/v1/questions";
export const url_submissions = "/v1/submissions";
export const url_testcases = "/v1/testcases";

export async function apiCreateQuestion(question) {
    console.log(question);
    let response;
    try {
        response = await api.post(url_questions, question);
    } catch(error) {
        console.log(error);
    }
    if (response?.ok) {
        return response;
    } else {
        return response?.status;
    }
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


export async function apiFetchQuestion(question_id) {
    let response;
    try {
        response = await api.get(url_questions, {
            params: {
                id: question_id
            }
        });
        console.log(response);
    } catch(error) {
        console.log(error);
    }
    console.log(response.data)
    return response.data;

    /*if (response?.ok) {
        return response.data;
    } else {
        return response?.status;
    }*/
}

export async function apiFetchTestCases(question_id) {
    let response;
    try {
        response = await api.get(url_testcases, {
            params: {
                id: question_id
            }
        });
        console.log(response);
    } catch(error) {
        console.log(error);
    }
    return response.data;
}

