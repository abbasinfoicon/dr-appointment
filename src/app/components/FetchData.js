import React from 'react'

const FetchData = async ({ url, method, body, formdata, authorization, contentType }) => {
    const headers = {};

    // Conditionally include the Authorization header if provided
    if (authorization) {
        headers.Authorization = authorization;
    }

    // Conditionally set the Content-Type header if provided
    if (contentType) {
        headers['Content-Type'] = contentType;
    }

    return (
        await fetch(`http://172.232.189.142:8000/${url}/`, {
            method: method,
            headers: headers,
            body: body ? JSON.stringify(body) : formdata ? formdata : null,
        })
    )
}

export default FetchData