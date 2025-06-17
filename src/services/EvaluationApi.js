import { api } from "./axios.mjs";
export const url_submissions = "/v1/submissions";

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
