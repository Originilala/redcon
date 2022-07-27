import React from "react";
import logo from '../../assets/logo.png';
import Header from "../../components/header/Header";
import './Button.css';

function Button({post}) {
    // console.log(post);
    return (
        <div className="button-card">
            <a href={post.data.url} className="button-title"><h4>{post.data.title}</h4></a>
            <div>
            <a href={`https://reddit.com/${post.data.subreddit_name_prefixed}`}>{post.data.subreddit_name_prefixed}</a>
            <p><span className="capitalize">comments</span> {post.data.num_comments} - <span className="capitalize">ups</span> {post.data.ups}</p>
            </div>
        </div>
    )
};

export default Button;