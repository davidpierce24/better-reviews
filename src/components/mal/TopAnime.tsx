import React from "react";
import SideScrollCharts from "../common/SideScrollCharts";
import { ChartModalProps} from "../common/ChartModal";
import { malData } from "./CurrentSeasonAnime";
import { ItemType } from "@/lib/types";

export const revalidate = 60 * 10;


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

    const TopAnimeData: malData[] = json.data;

    const animeList: ChartModalProps[] = TopAnimeData.map((item) => ({
      id: item.mal_id,
      rank: item.rank,
      title: item.title_english,
      imageUrl: item.images.webp.image_url,
      score: item.score,
      description: item.synopsis,
      itemType: ItemType.anime
    }));

    return (
      <SideScrollCharts
        listTitle="Top Anime All Time - MAL"
        itemList={animeList}
      />
    );
  } catch (error) {
    console.error("Failed to fetch top anime:", error);
    return null; // Or some error state/component
  }
}

export default TopAnime;
