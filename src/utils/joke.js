export default async function getjoke() {
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist&type=twopart')
    const resp = await res.json()
    return resp
}