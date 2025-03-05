import { Link, useLoaderData } from "react-router-dom";
import Modal from '../components/Modal'

export default function PostDetail() {
    const post = useLoaderData();
    return (
        <>
            {post && <Modal>
                <h2>{post.name}</h2>
                <h5>{post.text}</h5>
                <Link to='..' >Close</Link>
            </Modal>}
            {!post && <Modal>
                <h1>No found that post.</h1>
            </Modal>}
        </>

    )
}