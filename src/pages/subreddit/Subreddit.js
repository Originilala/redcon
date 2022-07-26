import React from "react";
import {useParams} from "react-router-dom";

function Subreddit(){
    const { subredditId: id } = useParams();
    return(
        <div>
            <p>Subreddit</p>
            <p>{id}</p>
        </div>
    )
};

export default Subreddit;