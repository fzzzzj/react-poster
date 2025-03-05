import { Link } from 'react-router-dom';
import classes from './Post.module.css'

export default function Post({ item }) {
    return (
        <div className={classes.post}>
            <Link to={item.id}>
                <h1>{item.name}</h1>
                <h3>{item.text}</h3>
            </Link>
        </div>
    );
}