import React from 'react'

const FetchData = async ({ url, method, body, authorization, contentType }) => {
    const headers = {
        "Content-Type": "application/json", // Set the correct Content-Type header
    };

    // Conditionally include the Authorization header if provided
    if (authorization) {
        headers.Authorization = authorization;
    }

    if (contentType) {
        headers['Content-Type'] = contentType;
    }

    return (
        await fetch(`http://172.232.189.142:8000/user/${url}/`, {
            method: method,
            headers: headers,
            body: body ? JSON.stringify(body) : null,
        })
    )
}

export default FetchData