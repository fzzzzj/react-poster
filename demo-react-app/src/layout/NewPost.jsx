import { Form, Link } from 'react-router-dom';
import classes from './NewPost.module.css'
import Modal from '../components/Modal';

export default function NewPost() {
    return (
        <Modal>
            <Form method='post' className={classes.form}>
                <label htmlFor="content">Text</label>
                <input id='content' name='text' required></input>
                <label htmlFor="name">Name</label>
                <input id='name' name='name' required></input>
                <Link to='..' type='button'>close</Link>
                <button>Submit</button>
            </Form>
        </Modal>
    );
}

