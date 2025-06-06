
export const baseUrl = "http://localhost:8000/api";

export const url_createQuestion = baseUrl + "/v1/questions";

export async function apiCreateQuestion(question) {
    console.log(question);
    let response;
    try {
        response = await fetch(url_createQuestion, {
            method: 'POST',
            headers: {
            'Content-Type':'application/json'
            },
            body: JSON.stringify(question)
        });
    } catch(error) {
        console.log(error);
    }
    if (response?.ok) {
        return response;
    } else {
        return response?.status;
    }
}
