import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import { ExpandMoreOutlined } from "@material-ui/icons";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";

function Post({ profilePic, image, userName, timestamp, message }) {
  return (
    <div className="post">
      <div className="post___top">
        <Avatar src={profilePic} className="post___avatar" />
        <div className="post___topInfo">
          <h3>{userName}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post___bottom">
        <p>{message}</p>
      </div>

      <div className="post___image">
        <img src={image} alt="" />
      </div>

      <div className="post___options">
        <div className="post___option">
          <ThumbUpIcon />
          <p>like</p>
        </div>
        <div className="post___option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post___option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post___option">
          <AccountCircleOutlinedIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
