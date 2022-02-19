export default async function getnp() {
    const res = await fetch('https://spotify-np-api.vercel.app/api', {mode: 'cors'});
    console.log(res)
    const data = await res.json();
    return data['np'];
}
