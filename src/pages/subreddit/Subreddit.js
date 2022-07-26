import {Link, useParams} from "react-router-dom";
import {React, useEffect, useState} from "react";
import axios from "axios";

function Subreddit(){
    const { subredditId: id } = useParams();
    const [infos, setInfo] = useState([]);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const getInfo = async () => {
            try {
                const result = await axios.get(`https://www.reddit.com/r/${id}/about.json`, {
                    cancelToken: source.token,
                });
                console.log(result.data.data);
                setInfo(result.data.data);
            } catch (e) {
                console.log(e);
            }
        }
        if (!infos.length) {
            getInfo();
        }
        return function cleanup(){
            source.cancel();
        }
    }, []);
    return(
        <div>

        <div>
            <p>{infos.title}</p>
            <p>{infos.public_description}</p>
            <p>{infos.subscribers}</p>
            <Link to="/">Take me back</Link>
        </div>

        </div>
    )
};

export default Subreddit;