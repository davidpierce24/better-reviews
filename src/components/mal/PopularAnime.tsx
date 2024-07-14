import React from "react";
import SideScrollCharts from "../common/SideScrollCharts";
import { ChartModalProps } from "../common/ChartModal";
import { malData } from "./CurrentSeasonAnime";


async function PopularAnime() {
  try {
    const response = await fetch(
      `http://api.jikan.moe/v4/top/anime?page=1&filter=bypopularity`,
      { signal: AbortSignal.timeout(5000) },
    );
    console.log(response);
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const json = await response.json();

    if (!json.data || !Array.isArray(json.data)) {
      console.error("Expected data not found in response");
      return null; // Or some error state/component
    }

    const PopularAnimeData: malData[] = json.data;

    const animeList: ChartModalProps[] = PopularAnimeData.map((item) => ({
      id: item.mal_id,
      rank: item.rank,
      title: item.title_english,
      imageUrl: item.images.webp.image_url,
      score: item.score,
      description: item.synopsis,
    }));

    return (
      <SideScrollCharts
        listTitle="Popular Anime All Time - MAL"
        itemList={animeList}
      />
    );
  } catch (error) {
    console.error("Failed to fetch popular anime:", error);
    return null; // Or some error state/component
  }
}

export default PopularAnime;
