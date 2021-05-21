import './Post.css';
import { useEffect, useState } from 'react';
import { Profile } from '../Profile/Profile';
import axios from 'axios';
import { Comments } from '../Comments/Comments';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60a8017387bb141174d82c8f';

export const Post = ({ post, tag, setTag }) => {
    const { id, owner, image, tags, text, publishDate, likes, link } = post;
    const { title, firstName, lastName } = owner;
    const [modalProfile, setModalProfile] = useState(false);
    const [modalComments, setModalComments] = useState(false);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/post/${id}/comment`, { headers: { 'app-id': APP_ID } });
                setComments(res.data.data);
            } catch (e) { console.error('Hubo un problema al leer los datos', e) }
        }
        if (!comments.length) fetchAPI();
    }, []);

    return (
        <div className='post-conteiner'>
            <h3 id='autor-post' onClick={() => setModalProfile(true)}>{title}. {firstName} {lastName}</h3>
            <img id='post-image' src={`${image}`} alt='' height='40%' width='80%'/>
            <div className='tags-post-conteiner'>
                {tags.map(t => {
                    return <label className='tags-post' onClick={() => setTag(t)} key={t}>{t} </label>
                })}
            </div>
            <p>{text}</p>
            <h4 id='date-post'> Published on {publishDate}</h4>
            <h5 id='likes-post'>{likes} likes</h5>
            <h5 id='comments-post' onClick={() => setModalComments(true)}>{comments.length} comments</h5>
            {link && <a rel='author' target='author' href={link}>More info</a>}
            {modalProfile && <Profile owner={owner} setModal={setModalProfile}/>}
            {modalComments && <Comments comments={comments} setModal={setModalComments}/>}
            {tag}
        </div>
    )
}