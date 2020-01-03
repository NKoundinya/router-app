export function getData(tokenV) {
    const res = fetch
        (
            'https://localhost:5000/user',
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + tokenV
                }
            }
        )
        .then(res => res.json());
    return res;
}