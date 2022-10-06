export default async function getdog() {
    const res = await fetch('https://api.thedogapi.com/v1/images/search?mime_types=gif')
    const resp = await res.json()
    return resp[0].url
}