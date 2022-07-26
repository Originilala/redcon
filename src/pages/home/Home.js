import React from "react";
import { Link } from "react-router-dom";

function Home({post}){
    console.log(post);
    return(
        <div>
        <p>Home</p>
            <ul>
                {post.map((subject) => {
                    return(
                        <li key={subject.data.title}>
                            <a href={subject.data.url}>{subject.data.title}</a>
                            <a href={`https://reddit.com/${subject.data.subreddit_name_prefixed}`}>{subject.data.subreddit_name_prefixed}</a>
                            <p>Comments {subject.data.num_comments}</p>
                            <p>Ups {subject.data.ups}</p>
                        </li>
                    );
                }
                    )
                }
            </ul>
        </div>
    )
};

export default Home;