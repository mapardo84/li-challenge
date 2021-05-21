import { useEffect, useState } from "react";
import axios from 'axios';
import { Post } from "../Post/Post";
import './Posts.css';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60a8017387bb141174d82c8f';

export const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [tag, setTag] = useState('');
    const [all, setAll] = useState('');

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } });
                setPosts(res.data.data);
                setAll(res.data.data);
            } catch (e) { console.error('Hubo un problema al leer los datos', e) }
        }
        if (!posts.length) fetchAPI();
    }, []);

    useEffect(() => {
        if (tag !== '') {
            setPosts(po => po.filter(p =>
            p.tags.includes(tag) 
            ))
        }
    }, [tag]);

    return (
        <div>
            {tag && <button onClick={() => {
                setTag('');
                setPosts(all)}
            }>Back</button>}
            <div className='posts-conteiner'>
            
                {posts.map(p => {
                    return <Post key={p.id} post={p} tag={tag} setTag={setTag}/>
                })}
                
            </div>
        </div>
    )
}