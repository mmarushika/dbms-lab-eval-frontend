import { api } from "./axios";

export const url_createQuestion = "/v1/questions";

export async function apiCreateQuestion(question) {
    console.log(question);
    let response;
    try {
        response = await api.post(url_createQuestion, question);
    } catch(error) {
        console.log(error);
    }
    if (response?.ok) {
        return response;
    } else {
        return response?.status;
    }
}
