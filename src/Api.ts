import axios from 'axios';

export async function sendEmailToEtan(email: string, subject: string, message: string) {
    const endpointUrl = "https://us-central1-triviaship.cloudfunctions.net/etanTestEndpoint";
    const body = {
        subject: subject,
        emailAddress: email,
        message: message,
    };
    return await axios.post(endpointUrl, body, {
        headers: {
            'Content-Type': 'application/json', // Specify the content type of the request body
            // You can add additional headers here if needed
        }
    })
    .then(response => {
        return response?.data;
        // return response?.data?.question;
    })
    .catch(error => {
        // Handle errors
        console.error('[getRandomTriviaQuestionFromDB] There was a problem with the axios request:', error);
        return null;
    });
}