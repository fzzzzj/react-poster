export default async function postDetailLoader({params}) {
    const id = params.id;
    const res = await fetch('http://localhost:8080/posts/' + id)
    const resData = await res.json();
    return resData.post;
}