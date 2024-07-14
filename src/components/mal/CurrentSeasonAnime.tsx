import React from "react";
import SideScrollCharts from "../common/SideScrollCharts";
import { ChartModalProps } from "../common/ChartModal";

export interface malData {
  mal_id: number;
  rank: number;
  title_english: string;
  images: {
    webp: {
      image_url: string;
    };
  };
  score: number;
  synopsis: string;
}

async function CurrentSeasonAnime() {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/seasons/now`);
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const json = await response.json();

    if (!json.data || !Array.isArray(json.data)) {
      console.error("Expected data not found in response");
      return null; // Or some error state/component
    }

    const CurrentSeasonAnimeData: malData[] = json.data;

    const animeList: ChartModalProps[] = CurrentSeasonAnimeData.map((item) => ({
      id: item.mal_id,
      rank: item.rank,
      title: item.title_english,
      imageUrl: item.images.webp.image_url,
      score: item.score,
      description: item.synopsis,
    }));

    return (
      <SideScrollCharts listTitle="Curren Season - MAL" itemList={animeList} />
    );
  } catch (error) {
    console.error("Failed to fetch top anime:", error);
    return null; // Or some error state/component
  }
}

export default CurrentSeasonAnime;
