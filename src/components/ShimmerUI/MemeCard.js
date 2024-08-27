import React from "react";

const MemeCard = ({ meme }) => {
  const { author, title, url } = meme;

  return (
    <div className="p-5 m-5 border border-black rounded-lg">
      <img className="w-52 h-52" alt="meme" src={url} />
      <p>{author}</p>
    </div>
  );
};

export default MemeCard;
