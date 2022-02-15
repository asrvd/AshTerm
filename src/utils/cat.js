export default async function getcat() {
    const res = await fetch('https://api.thecatapi.com/v1/images/search')
    const resp = await res.json()
    return resp[0].url
}