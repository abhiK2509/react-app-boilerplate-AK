import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";
import { MEMES_LOAD_PAGE_SIZE } from "../../utils/constants";

const ShimmerUI = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchMemes();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    /**
     * scrollY - How much user scrolled
     * innerHeight - Height of the window(visible section)
     * document.body.scrollHeight - Total height of the web page
     */
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMemes();
    }
  };

  const fetchMemes = async () => {
    setShowShimmer(true);
    const data = await fetch(
      `https://meme-api.com/gimme/${MEMES_LOAD_PAGE_SIZE}`
    );
    const jsonData = await data.json();

    setShowShimmer(false);
    setMemes((memes) => [...memes, ...jsonData.memes]);
  };

  return (
    <div>
      <h1 className="text-center font-bold">Shimmer UI + Infinite Scroll</h1>
      <div className="flex flex-wrap">
        {memes.map((meme, idx) => (
          <div key={idx}>
            <MemeCard key={idx} meme={meme} />
          </div>
        ))}
        {showShimmer && <Shimmer />}
      </div>
    </div>
  );
};

export default ShimmerUI;
