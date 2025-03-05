import { Link } from 'react-router-dom';
import classes from './MainHeader.module.css';

export default function MainHeader() {
    return (
        <main className={classes.main}>
            <h1>React Poster</h1>
            <Link to='/new' >New Post</Link>
        </main>
    )
}