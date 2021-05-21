import './Home.css';
import { Posts } from "../Posts/Posts";

export const Home = () => {
    return (
        <div className='home-conteiner'>
            <h1>LI-LAB SOCIAL MEDIA</h1>
            <Posts/>
        </div>
    )
}