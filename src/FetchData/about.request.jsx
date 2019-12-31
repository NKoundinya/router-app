export function getData(tokenV) {
    return fetch(
        'https://localhost:5000/users',
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + tokenV
            }
        }
    )
        .then(res => res.json())
        .catch(error => null)
}