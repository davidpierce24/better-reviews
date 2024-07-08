import React from "react";
import SideScrollCharts from "../common/SideScrollCharts";

interface data {
  rank: number;
  title: string;
  images: {
    webp: {
      image_url: string;
    };
  };
  score: number;
}

interface Anime {
    rank: number;
    title: string;
    imageUrl: string;
    score: number;
}

async function TopAnime() {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?page=1`);
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const json = await response.json();

    if (!json.data || !Array.isArray(json.data)) {
      console.error("Expected data not found in response");
      return null; // Or some error state/component
    }

    const TopAnimeData: data[] = json.data;

    const animeList: Anime[] = TopAnimeData.map((item) => ({
      rank: item.rank,
      title: item.title,
      imageUrl: item.images.webp.image_url,
      score: item.score,
    }));

    return (
      <SideScrollCharts listTitle="Top Anime All Time - MAL" itemList={animeList} />
    );
  } catch (error) {
    console.error("Failed to fetch top anime:", error);
    return null; // Or some error state/component
  }
}

export default TopAnime;
