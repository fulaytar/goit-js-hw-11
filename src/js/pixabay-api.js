export function imageSearch(query) {
    const baseUrl = 'https://pixabay.com/api/';
    const KEY_API = '42512842-e518c28c0b42a0fb4c46a85d3'
    
    const queryParams = new URLSearchParams({
        key: KEY_API,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page:30,
    })

    return fetch(`${baseUrl}?${queryParams}`).then(response => {
        if (!response.ok) {
            throw new Error('Image error')
        }
        return response.json();
    })
}
/*  `<img src="${webformatURL}" width="360" height="360">` */