import React from "react";
import logo from '../../assets/logo.png';
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import './Home.css';

function Home({post}) {
    // console.log(post);
    return (
        <div>
            <Header
                pageTitle="Reddit"
            />
            <section>
                <h2 className="main-main-title"><span className="capitalize">hottest</span> posts</h2>
                <h3 className="main-sub-title">on <span className="capitalize">reddit</span> right now</h3>
                <div className="main-list">
                {post.map((subject) => {
                        return (
                            <Button
                                post={subject}
                            />
                        );
                    }
                )
                }
                </div>
            </section>
        </div>
    )
};

export default Home;