export default async function loader() {
    const res = await fetch('http://localhost:8080/posts');
    const resData = await res.json();
    return resData.posts;
  }