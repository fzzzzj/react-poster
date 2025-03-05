import PostList from "../components/PostList";
import { Outlet, useLoaderData } from "react-router-dom";

function Posts() {
  const postList = useLoaderData();

  return (
    <>
      <Outlet />
      {postList.length > 0 && <PostList postList={postList} />}
      {postList.length === 0 && <h4 style={{ textAlign: "center" }}>There is no any post yet.</h4>}
    </>
  )
}

export default Posts;

