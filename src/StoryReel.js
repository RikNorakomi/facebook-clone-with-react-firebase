import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://picsum.photos/seed/picsum/200/300"
        profileSrc="https://picsum.photos/id/237/200/300"
        title="SOnny Sangha"
      />
      <Story
        image="https://picsum.photos/seed/picsum/200/300"
        profileSrc="https://picsum.photos/id/237/200/300"
        title="Something else"
      />
      <Story
        image="https://picsum.photos/seed/picsum/200/300"
        profileSrc="https://picsum.photos/id/237/200/300"
        title="SOnny Sangha"
      />
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
    </div>
  );
}

export default StoryReel;
