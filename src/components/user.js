import React from "react";

export default function User({ userData }) {
    return (
        <>
            <a target={"_blank"} href={userData.avatar_url}>
                <img className="user-img" src={userData.avatar_url}></img>
            </a>
            <p><b>Login:</b> {userData.login}</p>
            <p><b>Name:</b> {userData.name}</p>
            <p><b>Blog:</b> {userData.blog}</p>
            <p><b>Location:</b> {userData.location}</p>
            <p><b>Followers:</b> {userData.followers}</p>
            <p><b>Following:</b> {userData.following}</p>
        </>
    )
}