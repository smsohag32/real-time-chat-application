import React from "react";
import Header from "./Header";

const ChatFeed = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        {/* input area  */}
        <div>
          <input type="text" placeholder="Write something" />
        </div>
      </div>
    </div>
  );
};

export default ChatFeed;
