import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      {/* <iframe
      src="https://www.facebook.com/rik.vanv"
      width="340"
      height="100%"
      style={{border: "none", overflow="hidden"}}
      scrolling="no"
      frameBorder="0"
      allowTransparency="true"
      allow="encrypted-media"
      /> */}
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Frik.vanv%2Fposts%2F10164317479120722&show_text=true&width=552&appId=2481260148860944&height=263"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;
