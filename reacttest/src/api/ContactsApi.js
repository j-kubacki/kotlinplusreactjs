export function getAll(url, seed) {
    return fetch(
        url +
        encodeURIComponent(seed)
    )
        .then(res => res.json())
        .then(json => json.results);
}