import { redirect } from "react-router-dom";

export default async function postAction({request}) {
    const resData = await request.formData();
    const postData = Object.fromEntries(resData);
    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return redirect('..');
}