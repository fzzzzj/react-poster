import Post from "./Post";

export default function PostList({ postList }) {
    console.log(postList)
    return (
        <ul>
            {postList.map((item) => <Post key={item.id} item={item} />)}
        </ul>
    );
}