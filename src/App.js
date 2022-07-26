import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/home/Home.js';
import Subreddit from './pages/subreddit/Subreddit.js';
import axios from 'axios';
import {useEffect, useState} from "react";

function App() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const source = axios.CancelToken.source();

        const getHotPosts = async () => {
            try {
                const result = await axios.get("https://www.reddit.com/hot.json?limit=15", {
                    cancelToken: source.token,
                });
                console.log(result.data.data.children[0].data.title);
                setPosts(result.data.data.children);
            } catch (e) {
                console.log(e);
            }
        }
        if (!posts.length) {
            getHotPosts();
        }
        return function cleanup(){
            source.cancel();
        }
    }, []);

    console.log(posts);
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home
                        post={posts}
                    />
                </Route>
                <Route path="/subreddit/:subredditId">
                    <Subreddit/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
